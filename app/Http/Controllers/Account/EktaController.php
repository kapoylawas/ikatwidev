<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use PDF;

class EktaController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->first();

        $tahun = date('Y');
        $transactions = Transaction::with('user', 'transactionDetails')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where(function ($q) use ($tahun) {
                $q->where('tahun', $tahun)
                  ->orWhereHas('transactionDetails', function ($qd) use ($tahun) {
                      $qd->where('tahun', $tahun);
                  });
            })->get();
        $statusAnggota = User::where('id', auth()->user()->id)->first();

        return inertia('Account/Ekta/Index', [
            'biodata' => $biodata,
            'transactions' => $transactions,
            'statusAnggota' => $statusAnggota,
        ]);
    }

    public function cetakekta()
    {
        $biodata = User::where('id', auth()->user()->id)->first();

        $tahun = date('Y');
        $transactions = Transaction::with('user', 'transactionDetails')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where(function ($q) use ($tahun) {
                $q->where('tahun', $tahun)
                  ->orWhereHas('transactionDetails', function ($qd) use ($tahun) {
                      $qd->where('tahun', $tahun);
                  });
            })->get();
        $statusAnggota = User::where('id', auth()->user()->id)->first();

        // $pdf = PDF::loadView('cetakEkta', ['biodata' => $biodata]);
        // return $pdf->stream('E-KTA.pdf');

        return inertia('Account/Cetak/Index', [
            'biodata' => $biodata,
            'transactions' => $transactions,
            'statusAnggota' => $statusAnggota,
        ]);
    }
}
