<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use Illuminate\Http\Request;

class verifPengajuanController extends Controller
{
    public function index()
    {
        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })->with('province', 'city', 'tujuan')->latest()->paginate(10);

        return inertia('Account/VerifPengajuan/Index', [
            'verif' => $verif,
        ]);
    }

    public function edit(Pengajuan $verifPengajuan)
    {

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/VerifPengajuan/Edit', [
            'verifPengajuan' => $verifPengajuan,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }
}
