<?php

namespace App\Exports;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class MonitoringIuranExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize, WithStyles
{
    protected $request;
    protected $rowNumber = 0;
    protected $years = [2024, 2025, 2026];

    public function __construct(Request $request)
    {
        $this->request = $request;

        $currentYear = (int) date('Y');
        $distinctTxYears = Transaction::whereNotNull('tahun')
            ->where('tahun', '!=', '')
            ->distinct()
            ->pluck('tahun')
            ->map(fn($y) => (int) $y)
            ->filter(fn($y) => $y >= 2020 && $y <= $currentYear)
            ->toArray();

        $this->years = array_unique(array_merge([2024, 2025, $currentYear], $distinctTxYears));
        sort($this->years);
    }

    public function collection()
    {
        $rawTahun = $this->request->tahun;
        $tahun = ($rawTahun === 'all') ? 'all' : (int) ($rawTahun ?: date('Y'));
        $statusBayar = $this->request->status_bayar ?: 'all';
        $q = $this->request->q;

        $authUser = auth()->user();
        $isSuperAdmin = $authUser ? $authUser->hasRole(['admin', 'bendahara']) : false;
        $isAdminWilayah = $authUser ? $authUser->hasRole(['admin wilayah', 'timver dpw']) : false;
        $isAdminCabang = $authUser ? $authUser->hasRole('timver dpc') : false;

        $provinceId = $this->request->province_id;
        $cityId = $this->request->city_id;

        if ($isAdminWilayah) {
            $provinceId = $authUser->province_id;
        } elseif ($isAdminCabang) {
            $provinceId = $authUser->province_id;
            $cityId = $authUser->city_id;
        }

        $query = User::where('confirm', 'true')
            ->when($provinceId, fn($q) => $q->where('province_id', $provinceId))
            ->when($cityId, fn($q) => $q->where('city_id', $cityId))
            ->when($q, function ($query) use ($q) {
                $query->where(function ($sub) use ($q) {
                    $sub->where('name', 'like', "%{$q}%")
                        ->orWhere('no_anggota', 'like', "%{$q}%")
                        ->orWhere('nik', 'like', "%{$q}%")
                        ->orWhere('email', 'like', "%{$q}%")
                        ->orWhere('phone', 'like', "%{$q}%");
                });
            });

        $makePaidQuery = function ($yr) {
            return function ($query) use ($yr) {
                $query->where('status', 'PAID')
                    ->where(function ($sq) use ($yr) {
                        $sq->where('tahun', $yr)
                            ->orWhereHas('transactionDetails', function ($dq) use ($yr) {
                                $dq->where('tahun', $yr);
                            });
                    });
            };
        };

        if ($statusBayar === 'paid') {
            if ($tahun === 'all') {
                $query->whereHas('transactions', fn($q) => $q->where('status', 'PAID'));
            } else {
                $query->whereHas('transactions', $makePaidQuery($tahun));
            }
        } elseif ($statusBayar === 'unpaid') {
            if ($tahun === 'all') {
                $query->whereDoesntHave('transactions', $makePaidQuery(date('Y')));
            } else {
                $query->whereDoesntHave('transactions', $makePaidQuery($tahun));
            }
        }

        return $query->with([
            'province',
            'city',
            'transactions' => function ($q) {
                $q->whereIn('status', ['PAID', 'UNPAID'])
                    ->with('transactionDetails')
                    ->latest();
            }
        ])
        ->orderBy('name', 'ASC')
        ->get();
    }

    public function headings(): array
    {
        $headers = [
            'No',
            'Nama Anggota',
            'No. KTA (Anggota)',
            'NIK',
            'Email',
            'No. Telepon / WA',
            'DPW (Provinsi)',
            'DPC (Kota/Kab)',
            'Tahun Daftar Akun',
            'Mulai Kewajiban Iuran',
        ];

        foreach ($this->years as $yr) {
            $headers[] = "Status {$yr}";
        }

        $headers[] = 'Tahun Belum Lunas';
        $headers[] = 'Total Tahun Belum Lunas';

        return $headers;
    }

    public function map($user): array
    {
        $this->rowNumber++;

        $unpaidList = [];
        $yearlyValues = [];

        $rawCreatedAt = $user->getRawOriginal('created_at') ?: $user->created_at;
        $registeredYear = $rawCreatedAt ? (int) \Carbon\Carbon::parse($rawCreatedAt)->format('Y') : (int) date('Y');
        $registeredDate = $rawCreatedAt ? \Carbon\Carbon::parse($rawCreatedAt)->format('d/m/Y') : '-';

        $firstPaidYear = $user->transactions->where('status', 'PAID')->pluck('tahun')->filter()->min();
        if ($firstPaidYear) {
            $startYear = (int) $firstPaidYear;
        } else {
            $startYear = max(2024, min($registeredYear, (int) date('Y')));
        }

        foreach ($this->years as $yr) {
            $tx = $user->transactions->first(function ($t) use ($yr) {
                return (int) $t->tahun === (int) $yr ||
                    $t->transactionDetails->contains(fn($d) => (int) $d->tahun === (int) $yr);
            });

            if ($tx && $tx->status === 'PAID') {
                $yearlyValues[] = "LUNAS (Rp " . number_format($tx->grand_total, 0, ',', '.') . ")";
            } elseif ($yr < $startYear) {
                $yearlyValues[] = "-"; // Belum Menjadi Anggota
            } elseif ($tx && $tx->status === 'UNPAID') {
                $yearlyValues[] = "PENDING ({$tx->invoice})";
                $unpaidList[] = $yr;
            } else {
                $yearlyValues[] = "BELUM BAYAR";
                $unpaidList[] = $yr;
            }
        }

        $row = [
            $this->rowNumber,
            $user->name,
            $user->no_anggota ? "'" . $user->no_anggota : '-',
            $user->nik ? "'" . $user->nik : '-',
            $user->email ?: '-',
            $user->phone ? "'" . $user->phone : '-',
            $user->province->name ?? '-',
            $user->city->name ?? '-',
            "{$registeredYear} ({$registeredDate})",
            "Tahun {$startYear}",
        ];

        foreach ($yearlyValues as $val) {
            $row[] = $val;
        }

        $row[] = count($unpaidList) > 0 ? implode(', ', $unpaidList) : 'Semua Lunas';
        $row[] = count($unpaidList);

        return $row;
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => [
                    'bold' => true,
                    'color' => ['rgb' => 'FFFFFF'],
                ],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => ['rgb' => '059669'], // Emerald Theme
                ],
            ],
        ];
    }
}
