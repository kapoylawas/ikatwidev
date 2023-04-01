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
            // $anggota = User::select("users.*", "provinces.name AS nama_prov", "cities.name AS nama_city", "surat_strs.date_end AS tgl_akir")
            //     ->where('users.name', 'like', '%' . $request->q . '%')
            //     ->orWhere('users.no_anggota', 'like', '%' . $request->q . '%')
            //     // ->with('province', 'city')
            //     ->join('provinces', 'users.province_id', "=", "provinces.id")
            //     ->join('cities', 'users.city_id', "=", "cities.id")
            //     ->get();

            $anggota = User::where('name', 'like', '%'. $request->q . '%')
            ->orWhere('no_anggota', 'like', '%' . $request->q . '%')
            ->with('province', 'city', 'suratStrs')
            ->paginate(10);
        } else {
            
            $anggota = User::where('name', 'like', '%'. $request->q . '%')
            ->orWhere('no_anggota', 'like', '%' . $request->q . '%')
            ->with('province', 'city', 'suratStrs')
            ->paginate(0);
        }

        //return response
        return response()->json([
            'anggota' => $anggota,
        ]);
    }
}
