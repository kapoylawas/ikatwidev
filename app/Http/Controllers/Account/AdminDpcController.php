<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDpcController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();

        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })
            ->where('dpc_mutasi', auth()->user()->city_id) // Filter berdasarkan DPW admin
            ->with('province', 'city', 'tujuan', 'tujuanDpc')
            ->latest()
            ->paginate(10);

        return inertia('Account/VerifPengajuanDpc/Index', [
            'verif' => $verif,
            'biodata' => $biodata,
        ]);
    }

    public function edit(Pengajuan $verifPengajuanDpc)
    {

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/VerifPengajuanDpc/Edit', [
            'verifPengajuan' => $verifPengajuanDpc,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }


    public function show(Pengajuan $id)
    {
        $pengajuan = Pengajuan::findOrFail($id); // Adjust model name as needed

        return Inertia('Account/VerifPengajuanDpc/Show', [
            'pengajuan' => $pengajuan
        ]);
    }
}
