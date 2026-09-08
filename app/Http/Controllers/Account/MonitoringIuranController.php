<?php

namespace App\Http\Controllers\Account;

use App\Exports\MonitoringIuranExport;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class MonitoringIuranController extends Controller
{
    /**
     * Display monitoring list of annual membership dues
     */
    public function index(Request $request)
    {
        $currentYear = (int) date('Y');
        $rawTahun = $request->tahun;
        $tahun = ($rawTahun === 'all') ? 'all' : (int) ($rawTahun ?: $currentYear);
        $statusBayar = $request->status_bayar ?: 'all';
        $q = $request->q;

        $authUser = auth()->user();
        if (!$authUser) {
            abort(401);
        }

        // Scoping by user role: Only allowed for admin, bendahara, admin wilayah / timver dpw, timver dpc
        $isSuperAdmin = $authUser->hasRole(['admin', 'bendahara']);
        $isAdminWilayah = $authUser->hasRole(['admin wilayah', 'timver dpw']);
        $isAdminCabang = $authUser->hasRole('timver dpc');

        if (!$isSuperAdmin && !$isAdminWilayah && !$isAdminCabang) {
            abort(403, 'Akses Monitoring Iuran hanya dapat diakses oleh Admin, Bendahara, Admin Wilayah/DPW, dan Timver DPC.');
        }

        $provinceId = $request->province_id;
        $cityId = $request->city_id;

        if ($isAdminWilayah) {
            $provinceId = $authUser->province_id;
        } elseif ($isAdminCabang) {
            $provinceId = $authUser->province_id;
            $cityId = $authUser->city_id;
        }

        // Available active years with dues (only up to current year: 2024, 2025, 2026)
        $distinctTxYears = Transaction::whereNotNull('tahun')
            ->where('tahun', '!=', '')
            ->distinct()
            ->pluck('tahun')
            ->map(fn($y) => (int) $y)
            ->filter(fn($y) => $y >= 2020 && $y <= $currentYear)
            ->toArray();

        $availableYears = array_unique(array_merge([2024, 2025, $currentYear], $distinctTxYears));
        sort($availableYears); // [2024, 2025, 2026]

        // Closure for checking PAID transaction in a specific year
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

        // Base user query (only confirmed/verified members)
        $baseQuery = User::where('confirm', 'true')
            ->when($provinceId, fn($query) => $query->where('province_id', $provinceId))
            ->when($cityId, fn($query) => $query->where('city_id', $cityId));

        // Effective calculation year for KPI (if 'all', calculate against current active year)
        $calcYear = ($tahun === 'all') ? $currentYear : $tahun;
        $isPaidCalcQuery = $makePaidQuery($calcYear);

        // Global KPI Stats
        $totalAnggota = (clone $baseQuery)->count();
        $totalLunas = (clone $baseQuery)->whereHas('transactions', $isPaidCalcQuery)->count();
        $totalBelumBayar = max(0, $totalAnggota - $totalLunas);
        $persentaseLunas = $totalAnggota > 0 ? round(($totalLunas / $totalAnggota) * 100, 1) : 0;

        // Total collected funds in the specified year (or all years)
        $totalNominalQuery = Transaction::where('status', 'PAID')
            ->when($tahun !== 'all', function ($query) use ($tahun) {
                $query->where(function ($sq) use ($tahun) {
                    $sq->where('tahun', $tahun)
                        ->orWhereHas('transactionDetails', function ($dq) use ($tahun) {
                            $dq->where('tahun', $tahun);
                        });
                });
            })
            ->when($provinceId, fn($q) => $q->where('province_id', $provinceId))
            ->when($cityId, fn($q) => $q->where('city_id', $cityId));

        $totalNominal = $totalNominalQuery->sum('grand_total');

        // Apply filters to main paginated list
        $listQuery = (clone $baseQuery)
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
            if ($tahun === 'all') {
                $listQuery->whereHas('transactions', fn($q) => $q->where('status', 'PAID'));
            } else {
                $listQuery->whereHas('transactions', $makePaidQuery($tahun));
            }
        } elseif ($statusBayar === 'unpaid') {
            if ($tahun === 'all') {
                $listQuery->whereDoesntHave('transactions', $makePaidQuery($currentYear));
            } else {
                $listQuery->whereDoesntHave('transactions', $makePaidQuery($tahun));
            }
        }

        // Retrieve paginated records with relationships
        $users = $listQuery->with([
            'province',
            'city',
            'transactions' => function ($q) {
                $q->whereIn('status', ['PAID', 'UNPAID'])
                    ->with('transactionDetails')
                    ->latest();
            }
        ])
        ->orderBy('name', 'ASC')
        ->paginate(20)
        ->withQueryString();

        // Transform paginated items to include multi-year breakdown
        $users->getCollection()->transform(function ($user) use ($tahun, $availableYears, $currentYear) {
            $yearlyStatus = [];
            $unpaidYears = [];
            $paidYears = [];

            // Tentukan tahun pendaftaran akun
            $rawCreatedAt = $user->getRawOriginal('created_at') ?: $user->created_at;
            $registeredYear = $rawCreatedAt ? (int) \Carbon\Carbon::parse($rawCreatedAt)->format('Y') : $currentYear;
            $registeredDate = $rawCreatedAt ? \Carbon\Carbon::parse($rawCreatedAt)->format('d/m/Y') : '-';

            // Tentukan tahun awal kewajiban iuran:
            // Jika sudah pernah bayar iuran, mulai dari tahun transaksi PAID pertamanya
            $firstPaidYear = $user->transactions->where('status', 'PAID')->pluck('tahun')->filter()->min();
            if ($firstPaidYear) {
                $startYear = (int) $firstPaidYear;
            } else {
                $startYear = max(2024, min($registeredYear, $currentYear));
            }

            foreach ($availableYears as $yr) {
                $tx = $user->transactions->first(function ($t) use ($yr) {
                    return (int) $t->tahun === (int) $yr ||
                        $t->transactionDetails->contains(fn($d) => (int) $d->tahun === (int) $yr);
                });

                $isYrPaid = false;
                $yrStatus = 'UNPAID';
                $yrInvoice = null;
                $yrPaidAt = null;
                $yrAmount = 300000;

                if ($tx && $tx->status === 'PAID') {
                    $isYrPaid = true;
                    $yrStatus = 'PAID';
                    $yrInvoice = $tx->invoice;
                    $yrPaidAt = $tx->getRawOriginal('created_at') ? \Carbon\Carbon::parse($tx->getRawOriginal('created_at'))->format('d/m/Y') : ($tx->created_at ?: null);
                    $yrAmount = $tx->grand_total;
                    $paidYears[] = $yr;
                } elseif ($yr < $startYear) {
                    // Belum menjadi anggota aktif pembayar iuran pada tahun tersebut
                    $yrStatus = 'NOT_MEMBER';
                } elseif ($tx && $tx->status === 'UNPAID') {
                    $yrStatus = 'UNPAID_PENDING';
                    $yrInvoice = $tx->invoice;
                    $unpaidYears[] = $yr;
                } else {
                    $unpaidYears[] = $yr;
                }

                $yearlyStatus[] = [
                    'tahun'          => $yr,
                    'is_paid'        => $isYrPaid,
                    'is_exempt'      => ($yr < $startYear),
                    'payment_status' => $yrStatus,
                    'invoice'        => $yrInvoice,
                    'paid_at'        => $yrPaidAt,
                    'amount'         => $yrAmount,
                ];
            }

            // Target year status for primary display (if specific year chosen, use that, else use current year)
            $focusYear = ($tahun === 'all') ? $currentYear : (int) $tahun;
            $focusStatus = collect($yearlyStatus)->firstWhere('tahun', $focusYear) ?: [
                'tahun'          => $focusYear,
                'is_paid'        => false,
                'payment_status' => 'UNPAID',
                'invoice'        => null,
                'paid_at'        => null,
                'amount'         => 300000,
            ];

            return [
                'id'                 => $user->id,
                'name'               => $user->name,
                'no_anggota'         => $user->no_anggota,
                'nik'                => $user->nik,
                'email'              => $user->email,
                'phone'              => $user->phone,
                'registered_year'    => $registeredYear,
                'registered_date'    => $registeredDate,
                'start_year'         => $startYear,
                'province'           => $user->province ? ['id' => $user->province->id, 'name' => $user->province->name] : null,
                'city'               => $user->city ? ['id' => $user->city->id, 'name' => $user->city->name] : null,
                'image'              => $user->image,
                'is_paid'            => $focusStatus['is_paid'],
                'payment_status'     => $focusStatus['payment_status'],
                'paid_at'            => $focusStatus['paid_at'],
                'invoice'            => $focusStatus['invoice'],
                'paid_amount'        => $focusStatus['amount'],
                'expected_amount'    => 300000,
                'yearly_status'      => $yearlyStatus,
                'unpaid_years'       => $unpaidYears,
                'paid_years'         => $paidYears,
                'has_arrears'        => count($unpaidYears) > 0,
            ];
        });

        // Regional filter data
        $provinces = Province::orderBy('name', 'ASC')->get();
        $cities = $provinceId
            ? City::where('province_id', $provinceId)->orderBy('name', 'ASC')->get()
            : City::orderBy('name', 'ASC')->get();

        return inertia('Account/MonitoringIuran/Index', [
            'users' => $users,
            'stats' => [
                'total_anggota'     => $totalAnggota,
                'total_lunas'       => $totalLunas,
                'total_belum_bayar' => $totalBelumBayar,
                'total_nominal'     => $totalNominal,
                'persentase_lunas'  => $persentaseLunas,
            ],
            'availableYears' => $availableYears,
            'provinces'      => $provinces,
            'cities'         => $cities,
            'filters'        => [
                'tahun'        => $tahun,
                'status_bayar' => $statusBayar,
                'q'            => $q,
                'province_id'  => $provinceId,
                'city_id'      => $cityId,
            ],
            'roleScope' => [
                'isSuperAdmin'   => $isSuperAdmin,
                'isAdminWilayah' => $isAdminWilayah,
                'isAdminCabang'  => $isAdminCabang,
            ]
        ]);
    }

    /**
     * Export monitoring data to Excel
     */
    public function export(Request $request)
    {
        $authUser = auth()->user();
        if (!$authUser) {
            abort(401);
        }

        $isSuperAdmin = $authUser->hasRole(['admin', 'bendahara']);
        $isAdminWilayah = $authUser->hasRole(['admin wilayah', 'timver dpw']);
        $isAdminCabang = $authUser->hasRole('timver dpc');

        if (!$isSuperAdmin && !$isAdminWilayah && !$isAdminCabang) {
            abort(403, 'Akses Export Monitoring Iuran hanya dapat diakses oleh Admin, Bendahara, Admin Wilayah/DPW, dan Timver DPC.');
        }

        $tahun = $request->tahun ?: 'all';
        return Excel::download(
            new MonitoringIuranExport($request),
            "monitoring_iuran_ikatwi_{$tahun}_" . date('Ymd_His') . ".xlsx"
        );
    }
}
