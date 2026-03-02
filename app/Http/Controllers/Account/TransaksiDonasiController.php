<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransaksiDonasiController extends Controller
{
    public function index()
    {
        // Get transactions where tahun is null or empty (donasi type)
        $transaksiDonasi = Transaction::with(['user', 'transactionDetails.product'])
            ->whereNull('tahun')
            ->orWhere('tahun', '')
            ->orWhere('tahun', '-')
            ->latest()
            ->paginate(10);

        return inertia('Account/TransaksiDonasi/Index', [
            'transaksiDonasi' => $transaksiDonasi
        ]);
    }
}
