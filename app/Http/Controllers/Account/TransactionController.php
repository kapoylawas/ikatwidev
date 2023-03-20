<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

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
        if ($role[0] == 'admin') {

            $transactions = Transaction::whereHas('user', function ($query) use ($searchString){
                $query->where('name', 'like', '%'.$searchString.'%');
            })
            ->with(['user' => function($query) use ($searchString){
                $query->where('name', 'like', '%'.$searchString.'%');
            }])->latest()->paginate(10);
            //get transactions
            // $transactions = Transaction::with('user')->when(request()->q, function ($categories) {
            //     $categories = $categories->where('invoice', 'like', '%' . request()->q . '%');
            // })->latest()->paginate(5);
        } else {

            //get transactions
            // $transactions = Transaction::with('user')->when(request()->q, function ($categories) {
            //     $categories = $categories->where('invoice', 'like', '%' . request()->q . '%');
            // })->where('user_id', auth()->user()->id)->latest()->paginate(5);
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
}
