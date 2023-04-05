<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class EktaController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->first();

        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where('tahun', $tahun)->get();
        
        return inertia('Account/Ekta/Index', [
            'biodata' => $biodata,
            'transactions' => $transactions,
        ]);
    }
}
