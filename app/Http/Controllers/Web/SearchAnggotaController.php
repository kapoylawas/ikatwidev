<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SearchAnggotaController extends Controller
{
    public function __invoke(Request $request)
    {
        if ($request->q != "") {
            //get products by keywords
            $anggota = User::select("users.*", "provinces.name AS nama_prov", "cities.name AS nama_city")
                ->where('users.name', 'like', '%' . $request->q . '%')
                ->orWhere('users.no_anggota', 'like', '%' . $request->q . '%')
                // ->with('province', 'city')
                ->join('provinces', 'users.province_id', "=", "provinces.id")
                ->join('cities', 'users.city_id', "=", "cities.id")
                ->get();

            // $anggota = User::where('name', 'like', '%'. $request->q . '%')
            // ->orWhere('no_anggota', 'like', '%' . $request->q . '%')
            // ->with('province', 'city')
            // ->get();
        } else {
            $anggota = [];
        }

        //return response
        return response()->json([
            'anggota' => $anggota,
        ]);
    }
}
