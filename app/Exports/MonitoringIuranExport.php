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

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function collection()
    {
        $tahun = (int) ($this->request->tahun ?: date('Y'));
        $statusBayar = $this->request->status_bayar ?: 'all';
        $statusAnggota = $this->request->status_anggota ?: 'all';
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

        $isPaidQuery = function ($query) use ($tahun) {
            $query->where('status', 'PAID')
                ->where(function ($sq) use ($tahun) {
                    $sq->where('tahun', $tahun)
                        ->orWhereHas('transactionDetails', function ($dq) use ($tahun) {
                            $dq->where('tahun', $tahun);
                        });
                });
        };

        $query = User::where('confirm', 'true')
            ->when($provinceId, fn($q) => $q->where('province_id', $provinceId))
            ->when($cityId, fn($q) => $q->where('city_id', $cityId))
            ->when($statusAnggota !== 'all', fn($q) => $q->where('status_anggota', $statusAnggota))
            ->when($q, function ($query) use ($q) {
                $query->where(function ($sub) use ($q) {
                    $sub->where('name', 'like', "%{$q}%")
                        ->orWhere('no_anggota', 'like', "%{$q}%")
                        ->orWhere('nik', 'like', "%{$q}%")
                        ->orWhere('email', 'like', "%{$q}%")
                        ->orWhere('phone', 'like', "%{$q}%");
                });
            });

        if ($statusBayar === 'paid') {
            $query->whereHas('transactions', $isPaidQuery);
        } elseif ($statusBayar === 'unpaid') {
            $query->where('status_anggota', '!=', 'Anggota Kehormatan')
                ->whereDoesntHave('transactions', $isPaidQuery);
        } elseif ($statusBayar === 'exempt') {
            $query->where('status_anggota', 'Anggota Kehormatan');
        }

        return $query->with([
            'province',
            'city',
            'transactions' => function ($q) use ($tahun) {
                $q->where(function ($sq) use ($tahun) {
                    $sq->where('tahun', $tahun)
                        ->orWhereHas('transactionDetails', function ($dq) use ($tahun) {
                            $dq->where('tahun', $tahun);
                        });
                })->latest();
            }
        ])
        ->orderBy('name', 'ASC')
        ->get();
    }

    public function headings(): array
    {
        $tahun = (int) ($this->request->tahun ?: date('Y'));
        return [
            'No',
            'Nama Anggota',
            'No. KTA (Anggota)',
            'NIK',
            'Email',
            'No. Telepon / WA',
            'DPW (Provinsi)',
            'DPC (Kota/Kab)',
            'Status Keanggotaan',
            "Tahun Iuran",
            "Status Pembayaran",
            'Nominal Dibayar (Rp)',
            'Nomor Invoice',
            'Tanggal Pembayaran',
        ];
    }

    public function map($user): array
    {
        $this->rowNumber++;
        $tahun = (int) ($this->request->tahun ?: date('Y'));
        $isExempt = $user->status_anggota === 'Anggota Kehormatan';
        $tx = $user->transactions->first();

        $statusText = 'Belum Bayar';
        $nominal = 0;
        $invoice = '-';
        $tglBayar = '-';

        if ($isExempt) {
            $statusText = 'Bebas Iuran (Kehormatan)';
        } elseif ($tx && $tx->status === 'PAID') {
            $statusText = 'LUNAS (Sudah Bayar)';
            $nominal = $tx->grand_total;
            $invoice = $tx->invoice;
            $tglBayar = $tx->getRawOriginal('created_at') ? \Carbon\Carbon::parse($tx->getRawOriginal('created_at'))->format('d/m/Y H:i') : ($tx->created_at ?: '-');
        } elseif ($tx && $tx->status === 'UNPAID') {
            $statusText = 'Menunggu Pembayaran';
            $invoice = $tx->invoice;
        }

        return [
            $this->rowNumber,
            $user->name,
            $user->no_anggota ? "'" . $user->no_anggota : '-',
            $user->nik ? "'" . $user->nik : '-',
            $user->email ?: '-',
            $user->phone ? "'" . $user->phone : '-',
            $user->province->name ?? '-',
            $user->city->name ?? '-',
            $user->status_anggota ?: 'Anggota Biasa',
            $tahun,
            $statusText,
            $nominal,
            $invoice,
            $tglBayar,
        ];
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
