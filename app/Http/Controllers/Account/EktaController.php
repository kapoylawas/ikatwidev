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
        $user = auth()->user();
        $biodata = User::where('id', $user->id)->first();
        $memberStatus = $biodata->status_anggota ?? 'Anggota Biasa';

        // Retrieve all PAID transactions of the user
        $transactions = Transaction::with('user', 'transactionDetails')
            ->where('user_id', $user->id)
            ->where('status', 'PAID')
            ->get();

        $unpaidYears = Transaction::getUnpaidYears($user);

        // Anggota Kehormatan is exempt from dues; Regular members must have completed all dues
        if ($memberStatus === 'Anggota Kehormatan') {
            $isPaid = true;
        } else {
            $isPaid = $transactions->isNotEmpty() && count($unpaidYears) === 0;
        }

        return inertia('Account/Ekta/Index', [
            'biodata'       => $biodata,
            'transactions'  => $transactions,
            'statusAnggota' => $biodata,
            'isPaid'        => $isPaid,
            'unpaidYears'   => $unpaidYears,
        ]);
    }

    public function cetakekta()
    {
        $user = auth()->user();
        $biodata = User::where('id', $user->id)->first();
        $memberStatus = $biodata->status_anggota ?? 'Anggota Biasa';

        $transactions = Transaction::with('user', 'transactionDetails')
            ->where('user_id', $user->id)
            ->where('status', 'PAID')
            ->get();

        $unpaidYears = Transaction::getUnpaidYears($user);

        if ($memberStatus === 'Anggota Kehormatan') {
            $isPaid = true;
        } else {
            $isPaid = $transactions->isNotEmpty() && count($unpaidYears) === 0;
        }

        if (!$isPaid) {
            return redirect()->route('account.ekta.index');
        }

        return inertia('Account/Cetak/Index', [
            'biodata'       => $biodata,
            'transactions'  => $transactions,
            'statusAnggota' => $biodata,
            'isPaid'        => $isPaid,
            'unpaidYears'   => $unpaidYears,
        ]);
    }
}
