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
        $roleNames = $authUser ? $authUser->getRoleNames() : [];
        $primaryRole = $roleNames[0] ?? '';

        $provinceId = $this->request->province_id;
        $cityId = $this->request->city_id;

        if (in_array($primaryRole, ['admin wilayah', 'timver dpw'])) {
            $provinceId = $authUser->province_id;
        } elseif (in_array($primaryRole, ['timver dpc'])) {
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

        foreach ($this->years as $yr) {
            $tx = $user->transactions->first(function ($t) use ($yr) {
                return (int) $t->tahun === (int) $yr ||
                    $t->transactionDetails->contains(fn($d) => (int) $d->tahun === (int) $yr);
            });

            if ($tx && $tx->status === 'PAID') {
                $yearlyValues[] = "LUNAS (Rp " . number_format($tx->grand_total, 0, ',', '.') . ")";
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
