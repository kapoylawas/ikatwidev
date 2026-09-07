<?php

namespace App\Http\Controllers\Account;

use App\Exports\TransactionsExport;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;


class TransactionController extends Controller
{
    public function index()
    {
        /**
         * get role
         */
        $role = auth()->user()->getRoleNames();
        $searchString = request()->q;
        $status = request()->status;

        // Auto-expire transactions older than 24h & clean up superseded UNPAID
        Transaction::expireOldUnpaidTransactions();

        /**
         * build query
         */
        $query = Transaction::query();

        if ($role[0] != 'admin' && $role[0] != 'bendahara') {
            $query->where('user_id', auth()->user()->id);
        }

        if (!empty($searchString)) {
            $query->where(function ($q) use ($searchString) {
                $q->where('invoice', 'like', '%' . $searchString . '%')
                  ->orWhereHas('user', function ($uq) use ($searchString) {
                      $uq->where('name', 'like', '%' . $searchString . '%')
                         ->orWhere('no_anggota', 'like', '%' . $searchString . '%')
                         ->orWhere('email', 'like', '%' . $searchString . '%');
                  });
            });
        }

        if (!empty($status) && in_array($status, ['UNPAID', 'PAID', 'EXPIRED', 'CANCELLED'])) {
            $query->where('status', $status);
        }

        $transactions = $query->with('user')->latest()->paginate(10);

        //append query string to pagination links
        $transactions->appends(array_filter([
            'q' => $searchString,
            'status' => $status,
        ]));

        //return inertia
        return inertia('Account/Transactions/Index', [
            'transactions' => $transactions,
            'filters' => [
                'q' => $searchString ?? '',
                'status' => $status ?? '',
            ],
        ]);
    }

    public function show($invoice)
    {
        // Auto-expire transactions older than 24h
        Transaction::expireOldUnpaidTransactions();

        //get detail transaction by "reference"
        $transaction = Transaction::with('transactionDetails.product', 'user', 'province', 'city')->where('invoice', $invoice)->firstOrFail();

        // Check if this particular transaction has just expired
        if ($transaction->status === 'UNPAID' && $transaction->is_expired) {
            $transaction->status = 'EXPIRED';
            $transaction->save();
        }

        //return inertia
        return inertia('Account/Transactions/Show', [
            'transaction' => $transaction,
        ]);
    }

    public function cancel($invoice)
    {
        $transaction = Transaction::where('invoice', $invoice)->firstOrFail();

        // Only owner or admin can cancel
        $isOwner = $transaction->user_id === auth()->user()->id;
        $isAdmin = auth()->user()->hasRole('admin') || auth()->user()->hasRole('bendahara');

        if (!$isOwner && !$isAdmin) {
            abort(403);
        }

        if ($transaction->status === 'UNPAID') {
            $transaction->status = 'CANCELLED';
            $transaction->save();
        }

        return redirect()->back()->with('success', 'Transaksi berhasil dibatalkan.');
    }

    public function retry($invoice)
    {
        $transaction = Transaction::with('transactionDetails.product')->where('invoice', $invoice)->firstOrFail();

        if ($transaction->user_id !== auth()->user()->id) {
            abort(403);
        }

        // Recreate cart items from this transaction
        foreach ($transaction->transactionDetails as $detail) {
            \App\Models\Cart::updateOrCreate([
                'user_id'    => auth()->user()->id,
                'product_id' => $detail->product_id,
                'tahun'      => $detail->tahun,
            ], [
                'product_image' => $detail->product_image,
                'size'          => $detail->size,
                'qty'           => $detail->qty,
                'price'         => $detail->price,
                'weight'        => 0,
                'keterangan'    => $detail->keterangan ?? null,
            ]);
        }

        return redirect()->route('web.carts.index');
    }

    public function destroy($invoice)
    {
        $transaction = Transaction::where('invoice', $invoice)->firstOrFail();
        
        // delete transaction details first
        $transaction->transactionDetails()->delete();
        
        // delete transaction
        $transaction->delete();

        return redirect()->route('account.transactions.index');
    }

    public function export()
    {
        return Excel::download(new TransactionsExport(), 'transaction.xlsx');
    }
}
