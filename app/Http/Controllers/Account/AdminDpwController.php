<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Pengajuan;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDpwController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();

        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })
            ->where('tujuan_mutasi', auth()->user()->province_id) // Filter berdasarkan DPW admin
            ->with('province', 'city', 'tujuan', 'tujuanDpc')
            ->latest()
            ->paginate(10);

        return inertia('Account/VerifPengajuanDpw/Index', [
            'verif' => $verif,
            'biodata' => $biodata,
        ]);
    }
}
