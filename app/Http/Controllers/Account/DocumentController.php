<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index()
    {

        $transactions = Transaction::with('user')
        ->where('user_id', auth()->user()->id)
        ->where('grand_total', 50000)->get();

        // $searchString = request()->q;

        // $transactions = Transaction::whereHas('user', function ($query) use ($searchString){
        //     $query->where('name', 'like', '%'.$searchString.'%');
        // })
        // ->with(['user' => function($query) use ($searchString){
        //     $query->where('name', 'like', '%'.$searchString.'%');
        // }])->where('user_id', auth()->user()->id)->latest()->paginate(10);

        $users = User::when(request()->q, function ($users) {
            $users = $users->where('name', 'like', '%' . request()->q . '%');
        })->with('roles', 'province', 'city')->where('id', auth()->user()->id)
        // ->orWhere('province_id', auth()->user()->province_id)
        ->latest()->paginate(5);

        //append query string to pagination links
        $users->appends(['q' => request()->q]);

        return inertia('Account/Documents/Index', [
            'users' => $users,
            'transactions' => $transactions
        ]);
    }
}
