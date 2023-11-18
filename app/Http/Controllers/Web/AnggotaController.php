<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    public function index() {
        $provinces = Province::all();
        $cities = City::all();
        //render inertia
        return inertia('Web/Anggota/Index',[
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }
}
