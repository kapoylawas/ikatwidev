<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class TagihanController extends Controller
{
    public function index()
    {
        // Auto-expire old unpaid transactions
        Transaction::expireOldUnpaidTransactions(auth()->user()->id);

        $currentYear = (int) date('Y');
        $user = auth()->user();
        $isAnggotaKehormatan = $user->status_anggota === 'Anggota Kehormatan';

        // Standard annual fee calculation
        $annualAmount = 300000;
        if ($user->status_anggota === 'Anggota Baru' || $user->status_anggota === 'Anggota Muda') {
            $annualAmount = 100000;
        }

        // Check current year transaction
        $currentTx = Transaction::where('user_id', $user->id)
            ->where('tahun', $currentYear)
            ->latest()
            ->first();

        // Check if in cart
        $currentCart = Cart::where('user_id', $user->id)
            ->where('tahun', $currentYear)
            ->first();

        // Determine current year due status
        $status = 'UNPAID_NO_CART';
        if ($isAnggotaKehormatan) {
            $status = 'EXEMPT';
        } elseif ($currentTx && $currentTx->status === 'PAID') {
            $status = 'PAID';
        } elseif ($currentTx && $currentTx->status === 'UNPAID') {
            $status = 'UNPAID_PENDING';
        } elseif ($currentCart) {
            $status = 'IN_CART';
        } elseif ($currentTx && $currentTx->status === 'EXPIRED') {
            $status = 'EXPIRED';
        }

        // Active cart items for this user
        $carts = Cart::with('product')
            ->where('user_id', $user->id)
            ->latest()
            ->get();

        // Historical dues transactions
        $transactions = Transaction::where('user_id', $user->id)
            ->whereNotNull('tahun')
            ->orderBy('tahun', 'desc')
            ->latest()
            ->get();

        // Get all unpaid years (tunggakan masa lalu + tahun berjalan)
        $unpaidYears = Transaction::getUnpaidYears($user);
        $unpaidYearsList = [];
        $totalArrears = 0;

        foreach ($unpaidYears as $yr) {
            $yrCart = Cart::where('user_id', $user->id)->where('tahun', $yr)->first();
            $yrTx = Transaction::where('user_id', $user->id)->where('tahun', $yr)->latest()->first();

            $yrStatus = 'UNPAID';
            if ($yrTx && $yrTx->status === 'UNPAID') {
                $yrStatus = 'UNPAID_PENDING';
            } elseif ($yrCart) {
                $yrStatus = 'IN_CART';
            } elseif ($yrTx && $yrTx->status === 'EXPIRED') {
                $yrStatus = 'EXPIRED';
            }

            $unpaidYearsList[] = [
                'tahun'         => $yr,
                'amount'        => $annualAmount,
                'status'        => $yrStatus,
                'isCurrentYear' => $yr === $currentYear,
                'activeInvoice' => $yrTx && $yrTx->status === 'UNPAID' ? $yrTx->invoice : null,
            ];
            $totalArrears += $annualAmount;
        }

        // Build active due summary object
        $activeDue = [
            'tahun'               => $currentYear,
            'amount'              => $annualAmount,
            'status'              => $status,
            'isAnggotaKehormatan' => $isAnggotaKehormatan,
            'hasUnpaidDue'        => in_array($status, ['UNPAID_NO_CART', 'IN_CART', 'UNPAID_PENDING', 'EXPIRED']) || count($unpaidYears) > 0,
            'unpaidYears'         => $unpaidYears,
            'unpaidYearsList'     => $unpaidYearsList,
            'totalArrears'        => $totalArrears,
            'hasMultipleDues'     => count($unpaidYears) > 1,
            'activeInvoice'       => $status === 'UNPAID_PENDING' && $currentTx ? [
                'invoice'           => $currentTx->invoice,
                'reference'         => $currentTx->reference,
                'grand_total'       => $currentTx->grand_total,
                'raw_created_at'    => $currentTx->raw_created_at,
                'expires_at'        => $currentTx->expires_at,
                'seconds_remaining' => $currentTx->seconds_remaining,
            ] : null,
            'cartItem'            => $currentCart,
        ];

        return inertia('Account/Tagihan/Index', [
            'activeDue'    => $activeDue,
            'carts'        => $carts,
            'transactions' => $transactions,
            'user'         => $user,
        ]);
    }

    public function createDueCart(Request $request)
    {
        Transaction::expireOldUnpaidTransactions(auth()->user()->id);

        $user = auth()->user();

        if ($user->status_anggota === 'Anggota Kehormatan') {
            return redirect()->route('account.tagihan.index')->with('info', 'Anggota Kehormatan dibebaskan dari iuran.');
        }

        // Fee rate
        $price = 300000;
        if ($user->status_anggota === 'Anggota Baru' || $user->status_anggota === 'Anggota Muda') {
            $price = 100000;
        }

        // If requested to pay ALL unpaid years
        if ($request->tahun === 'all') {
            $unpaidYears = Transaction::getUnpaidYears($user);
            if (empty($unpaidYears)) {
                return redirect()->route('account.tagihan.index')->with('info', 'Seluruh iuran sudah lunas.');
            }

            foreach ($unpaidYears as $yr) {
                Cart::updateOrCreate([
                    'user_id' => $user->id,
                    'tahun'   => $yr,
                ], [
                    'product_id'    => 1,
                    'product_image' => 'gMreGxufmxSztWIZGMmFy8wCsy9rIdxvjCH2uj2M.png',
                    'size'          => 'Iuran',
                    'qty'           => 1,
                    'price'         => $price,
                    'weight'        => 0,
                    'keterangan'    => 'Iuran Anggota IKATWI Tahun ' . $yr,
                ]);
            }

            return redirect()->route('web.carts.index');
        }

        $targetYear = (int) ($request->tahun ?? date('Y'));

        // Check if already paid
        $alreadyPaid = Transaction::where('user_id', $user->id)
            ->where('tahun', $targetYear)
            ->where('status', 'PAID')
            ->exists();

        if ($alreadyPaid) {
            return redirect()->route('account.tagihan.index')->with('info', 'Iuran tahun ' . $targetYear . ' sudah lunas.');
        }

        // Upsert single year into Cart
        Cart::updateOrCreate([
            'user_id' => $user->id,
            'tahun'   => $targetYear,
        ], [
            'product_id'    => 1,
            'product_image' => 'gMreGxufmxSztWIZGMmFy8wCsy9rIdxvjCH2uj2M.png',
            'size'          => 'Iuran',
            'qty'           => 1,
            'price'         => $price,
            'weight'        => 0,
            'keterangan'    => 'Iuran Anggota IKATWI Tahun ' . $targetYear,
        ]);

        return redirect()->route('web.carts.index');
    }
}
