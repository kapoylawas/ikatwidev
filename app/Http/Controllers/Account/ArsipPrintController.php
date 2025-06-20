<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use Illuminate\Http\Request;

class ArsipPrintController extends Controller
{
    public function index()
    {
        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })->with('province', 'city', 'tujuan', 'tujuanDpc')->latest()->paginate(10);

        return inertia('Account/ArsipPrintPengajuan/Index', [
            'verif' => $verif,
        ]);
    }

    public function edit(Pengajuan $arsip)
    {

        // Eager load user relationship
        $arsip->load([
            'user',
            'province',
            'city',
            'tujuan', // relasi ke Province
            'tujuanDpc'     // relasi ke City
        ]);

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/ArsipPrintPengajuan/Edit', [
            'arsip' => $arsip,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }
}
