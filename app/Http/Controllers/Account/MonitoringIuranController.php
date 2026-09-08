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
        $tahun = (int) ($request->tahun ?: $currentYear);
        $statusBayar = $request->status_bayar ?: 'all';
        $q = $request->q;

        // Scoping by user role
        $authUser = auth()->user();
        $roleNames = $authUser ? $authUser->getRoleNames() : [];
        $primaryRole = $roleNames[0] ?? '';

        $isSuperAdmin = in_array($primaryRole, ['admin', 'bendahara']);
        $isAdminWilayah = in_array($primaryRole, ['admin wilayah', 'timver dpw']);
        $isAdminCabang = in_array($primaryRole, ['timver dpc']);

        $provinceId = $request->province_id;
        $cityId = $request->city_id;

        if ($isAdminWilayah) {
            $provinceId = $authUser->province_id;
        } elseif ($isAdminCabang) {
            $provinceId = $authUser->province_id;
            $cityId = $authUser->city_id;
        }

        // Available years for selection
        $distinctTxYears = Transaction::whereNotNull('tahun')
            ->where('tahun', '!=', '')
            ->distinct()
            ->pluck('tahun')
            ->map(fn($y) => (int) $y)
            ->toArray();

        $availableYears = array_unique(array_merge([$currentYear + 1, $currentYear, 2025, 2024], $distinctTxYears));
        rsort($availableYears);

        // Closure for checking PAID transaction in the specified year
        $isPaidQuery = function ($query) use ($tahun) {
            $query->where('status', 'PAID')
                ->where(function ($sq) use ($tahun) {
                    $sq->where('tahun', $tahun)
                        ->orWhereHas('transactionDetails', function ($dq) use ($tahun) {
                            $dq->where('tahun', $tahun);
                        });
                });
        };

        // Base user query (only confirmed/verified members)
        $baseQuery = User::where('confirm', 'true')
            ->when($provinceId, fn($query) => $query->where('province_id', $provinceId))
            ->when($cityId, fn($query) => $query->where('city_id', $cityId));

        // Global KPI Stats (within the active regional scope)
        $totalAnggota = (clone $baseQuery)->count();
        $totalLunas = (clone $baseQuery)->whereHas('transactions', $isPaidQuery)->count();
        $totalBelumBayar = max(0, $totalAnggota - $totalLunas);
        $persentaseLunas = $totalAnggota > 0 ? round(($totalLunas / $totalAnggota) * 100, 1) : 0;

        // Total collected funds in the specified year
        $totalNominal = Transaction::where('status', 'PAID')
            ->where(function ($sq) use ($tahun) {
                $sq->where('tahun', $tahun)
                    ->orWhereHas('transactionDetails', function ($dq) use ($tahun) {
                        $dq->where('tahun', $tahun);
                    });
            })
            ->when($provinceId, fn($q) => $q->where('province_id', $provinceId))
            ->when($cityId, fn($q) => $q->where('city_id', $cityId))
            ->sum('grand_total');

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
            $listQuery->whereHas('transactions', $isPaidQuery);
        } elseif ($statusBayar === 'unpaid') {
            $listQuery->whereDoesntHave('transactions', $isPaidQuery);
        }

        // Retrieve paginated records with relationships
        $users = $listQuery->with([
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
        ->paginate(20)
        ->withQueryString();

        // Transform paginated items to include clear payment metadata
        $users->getCollection()->transform(function ($user) use ($tahun) {
            $tx = $user->transactions->first();

            $isPaid = false;
            $paymentStatus = 'UNPAID';
            $paidAt = null;
            $invoice = null;
            $paidAmount = null;

            if ($tx && $tx->status === 'PAID') {
                $isPaid = true;
                $paymentStatus = 'PAID';
                $paidAt = $tx->created_at;
                $invoice = $tx->invoice;
                $paidAmount = $tx->grand_total;
            } elseif ($tx && $tx->status === 'UNPAID') {
                $paymentStatus = 'UNPAID_PENDING';
                $invoice = $tx->invoice;
            }

            return [
                'id'              => $user->id,
                'name'            => $user->name,
                'no_anggota'      => $user->no_anggota,
                'nik'             => $user->nik,
                'email'           => $user->email,
                'phone'           => $user->phone,
                'province'        => $user->province ? ['id' => $user->province->id, 'name' => $user->province->name] : null,
                'city'            => $user->city ? ['id' => $user->city->id, 'name' => $user->city->name] : null,
                'image'           => $user->image,
                'is_paid'         => $isPaid,
                'payment_status'  => $paymentStatus,
                'paid_at'         => $paidAt,
                'invoice'         => $invoice,
                'paid_amount'     => $paidAmount,
                'expected_amount' => 300000,
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
        $tahun = (int) ($request->tahun ?: date('Y'));
        return Excel::download(
            new MonitoringIuranExport($request),
            "monitoring_iuran_ikatwi_{$tahun}_" . date('Ymd_His') . ".xlsx"
        );
    }
}
