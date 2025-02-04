<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // jumlah transaction
        $unpaid = Transaction::where('status', 'UNPAID')->count();
        $paid = Transaction::where('status', 'PAID')->count();
        $expired = Transaction::where('status', 'EXPIRED')->count();
        $cancelled  = Transaction::where('status', 'CANCELLED')->count();
        $user = User::count();
        $pns = User::where('kepegawaian', 'PNS')->count();
        $swasta = User::where('kepegawaian', 'Swasta')->count();
        $kontrak = User::where('kepegawaian', 'BLU/KONTRAK')->count();
        $pppk = User::where('kepegawaian', 'PPPK')->count();
        $belumBekerja = User::where('kepegawaian', 'Belum Bekerja')->count();
        $poltekesKemenkesSurakarta = User::where('istitusi', 'Poltekes Kemenkes Surakarta')->count();
        $akademiTerapiWicaraYayasanBinaWicaraJakarta = User::where('istitusi', 'Akademi Terapi Wicara Yayasan Bina Wicara Jakarta')->count();
        $politeknikAlIslamBandung = User::where('istitusi', 'Politeknik AL Islam Bandung')->count();
        $stikesMercubaktijayaPadang = User::where('istitusi', 'Stikes Mercubaktijaya Padang')->count();
        $lainLain = User::where('istitusi', 'Lain-Lain')->count();

        // jumlah transaksi user
        $unpaiduser = Transaction::where('status', 'UNPAID')->where('user_id', auth()->user()->id)->count();
        $paiduser = Transaction::where('status', 'PAID')->where('user_id', auth()->user()->id)->count();
        $expireduser = Transaction::where('status', 'EXPIRED')->where('user_id', auth()->user()->id)->count();
        $cancelleduser  = Transaction::where('status', 'CANCELLED')->where('user_id', auth()->user()->id)->count();
        
        return inertia('Account/Dashboard/Index', [
            'count' => [
                'unpaid'    => $unpaid,
                'paid'      => $paid,
                'expired'   => $expired,
                'cancelled' => $cancelled,
                'unpaiduser' => $unpaiduser,
                'paiduser' => $paiduser,
                'expireduser' => $expireduser,
                'cancelleduser' => $cancelleduser,
                'user' => $user,
                'pns' => $pns,
                'swasta' => $swasta,
                'kontrak' => $kontrak,
                'pppk' => $pppk,
                'belumBekerja' => $belumBekerja,
                'poltekesKemenkesSurakarta' => $poltekesKemenkesSurakarta,
                'akademiTerapiWicaraYayasanBinaWicaraJakarta' => $akademiTerapiWicaraYayasanBinaWicaraJakarta,
                'politeknikAlIslamBandung' => $politeknikAlIslamBandung,
                'stikesMercubaktijayaPadang' => $stikesMercubaktijayaPadang,
                'lainLain' => $lainLain,
            ]
        ]);
    }
}
