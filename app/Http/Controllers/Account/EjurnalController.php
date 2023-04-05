<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class EjurnalController extends Controller
{
    public function index()
    {
        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where('tahun', $tahun)->get();
            
        return inertia('Account/Ejurnal/Index', [
            'transactions' => $transactions,
        ]);
    }
}
