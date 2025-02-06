<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
        $klinikSwasta = User::where('bekerja', 'Klinik Swasta')->count();
        $rumahSakitSwasta = User::where('bekerja', 'Rumah Sakit Swasta')->count();
        $rumahSakitUmumPusat = User::where('bekerja', 'Rumah Sakit Umum Pusat')->count();
        $rumahSakitUmumDaerah = User::where('bekerja', 'Rumah Sakit Umum Daerah')->count();
        $rumahSakitMiliter = User::where('bekerja', 'Rumah Sakit Militer')->count();
        $rumahSakitKhusus = User::where('bekerja', 'Rumah Sakit Khusus')->count();
        $puskesmas = User::where('bekerja', 'Puskesmas')->count();
        $sekolahLuarBiasa = User::where('bekerja', 'Sekolah Luar Biasa')->count();
        $perguruanTinggi = User::where('bekerja', 'Perguruan Tinggi')->count();
        $belum_bekerja = User::where('bekerja', 'Belum Bekerja')->count();
        $freelance = User::where('bekerja', 'Freelance')->count();
        $lainnya = User::where('bekerja', 'Lainnya')->count();
        $D3 = User::where('pendidikan', 'D3')->count();
        $D4 = User::where('pendidikan', 'D4')->count();
        $S2 = User::where('pendidikan', 'S2 (Magister Terapi Wicara)')->count();
        $S3 = User::where('pendidikan', 'S3 (Doktor Terapi Wicara)')->count();

        $countSIP = DB::table('users')
            ->join('surat_sips', 'users.id', '=', 'surat_sips.user_id')
            ->distinct()
            ->count('users.id');

        $countSTR = DB::table('users')
            ->join('surat_strs', 'users.id', '=', 'surat_strs.user_id')
            ->distinct()
            ->count('users.id');

        $kelengkapan = User::where('kelengkapan', 'true')->count();

        $countNoSIP = DB::table('users')
            ->leftJoin('surat_sips', 'users.id', '=', 'surat_sips.user_id')
            ->whereNull('surat_sips.id')
            ->count('users.id');

        $countNoSTR = DB::table('users')
            ->leftJoin('surat_strs', 'users.id', '=', 'surat_strs.user_id')
            ->whereNull('surat_strs.id')
            ->count('users.id');


        $currentYear = Carbon::now()->year;

        $paidUsersCount = User::whereHas('transactions', function ($query) use ($currentYear) {
            $query->where('status', 'paid')
                  ->where('tahun', $currentYear);
        })->count();

        $unpaidUsersCount = User::whereDoesntHave('transactions', function ($query) use ($currentYear) {
            $query->where('status', 'unpaid')
                  ->whereYear('tahun', $currentYear);
        })->count();

        // jumlah transaksi user
        $unpaiduser = Transaction::where('status', 'UNPAID')->where('user_id', auth()->user()->id)->count();
        $paiduser = Transaction::where('status', 'PAID')->where('user_id', auth()->user()->id)->count();
        $expireduser = Transaction::where('status', 'EXPIRED')->where('user_id', auth()->user()->id)->count();
        $cancelleduser  = Transaction::where('status', 'CANCELLED')->where('user_id', auth()->user()->id)->count();

        $usersCountByProvince = DB::table('provinces')
                    ->leftJoin('users', 'provinces.id', '=', 'users.province_id')
                    ->select('provinces.name as province_name', DB::raw('count(users.id) as user_count'))
                    ->groupBy('provinces.id')
                    ->get();
        
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
                'klinikSwasta' => $klinikSwasta,
                'rumahSakitSwasta' => $rumahSakitSwasta,
                'rumahSakitUmumPusat' => $rumahSakitUmumPusat,
                'rumahSakitUmumDaerah' => $rumahSakitUmumDaerah,
                'rumahSakitMiliter' => $rumahSakitMiliter,
                'rumahSakitKhusus' => $rumahSakitKhusus,
                'puskesmas' => $puskesmas,
                'sekolahLuarBiasa' => $sekolahLuarBiasa,
                'perguruanTinggi' => $perguruanTinggi,
                'belum_bekerja' => $belum_bekerja,
                'freelance' => $freelance,
                'lainnya' => $lainnya,
                'D3' => $D3,
                'D4' => $D4,
                'S2' => $S2,
                'S3' => $S3,
                'countSIP' => $countSIP,
                'countSTR' => $countSTR,
                'kelengkapan' => $kelengkapan,
                'paidUsersCount' => $paidUsersCount,
                'unpaidUsersCount' => $unpaidUsersCount,
            ],
            'usersCountByProvince' => $usersCountByProvince
        ]);
    }
}
