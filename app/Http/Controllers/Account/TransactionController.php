<?php

namespace App\Http\Controllers\Account;

use App\Exports\TransactionsExport;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
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

        
        /**
         * get transactions
         */
        if ($role[0] == 'admin' || $role[0] == 'bendahara') {

            $transactions = Transaction::whereHas('user', function ($query) use ($searchString){
                $query->where('name', 'like', '%'.$searchString.'%');
            })
            ->with(['user' => function($query) use ($searchString){
                $query->where('name', 'like', '%'.$searchString.'%');
            }])->latest()->paginate(10);
        } else {
            $transactions = Transaction::whereHas('user', function ($query) use ($searchString){
                $query->where('name', 'like', '%'.$searchString.'%');
            })
            ->with(['user' => function($query) use ($searchString){
                $query->where('name', 'like', '%'.$searchString.'%');
            }])->where('user_id', auth()->user()->id)->latest()->paginate(10);
        }

        //append query string to pagination links
        $transactions->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Transactions/Index', [
            'transactions' => $transactions,
        ]);
    }

    public function show($invoice)
    {
        //get detail transaction by "reference"
        $transaction = Transaction::with('transactionDetails.product', 'user', 'province', 'city')->where('invoice', $invoice)->first();

        //return inertia
        return inertia('Account/Transactions/Show', [
            'transaction' => $transaction,
        ]);
    }

    public function export()
    {
        return Excel::download(new TransactionsExport(), 'transaction.xlsx');
    }
}
