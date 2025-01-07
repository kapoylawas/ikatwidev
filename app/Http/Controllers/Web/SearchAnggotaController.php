<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchAnggotaController extends Controller
{
    public function __invoke(Request $request)
    {
        // if ($request->q != "") {
        //     //get products by keywords
        //     // $anggota = User::select("users.*", "provinces.name AS nama_prov", "cities.name AS nama_city", "surat_strs.date_end AS tgl_akir")
        //     //     ->where('users.name', 'like', '%' . $request->q . '%')
        //     //     ->orWhere('users.no_anggota', 'like', '%' . $request->q . '%')
        //     //     // ->with('province', 'city')
        //     //     ->join('provinces', 'users.province_id', "=", "provinces.id")
        //     //     ->join('cities', 'users.city_id', "=", "cities.id")
        //     //     ->get();

        //     $anggota = User::where('name', 'like', '%'. $request->q . '%')
        //     ->orWhere('no_anggota', 'like', '%' . $request->q . '%')
        //     ->with('province', 'city', 'suratStrs')
        //     ->whereHas('suratStrs', function ($q){
        //         $q->where('status_aktif', 1);
        //     })
        //     ->paginate(10);
        // } else {

        //     $anggota = User::where('name', 'like', '%'. $request->q . '%')
        //     ->orWhere('no_anggota', 'like', '%' . $request->q . '%')
        //     ->with('province', 'city', 'suratStrs')
        //     ->whereHas('suratStrs', function ($q){
        //         $q->where('status_aktif', 1);
        //     })
        //     ->paginate(1);
        // }

        // //return response
        // return response()->json([
        //     'anggota' => $anggota,
        // ]);
        $words = $request->q;
        $dpc = $request->dpc;
        $dpw = $request->dpw;
        $collation = 'utf8mb4_general_ci';

        $anggota = User::with('province', 'city', 'suratStrs', 'suratSip')->withLatestTransaction();
        if (!empty($dpc)) {
            $anggota = $anggota->where('city_id', $dpc);
        }
        if (!empty($dpw)) {
            $anggota = $anggota->where('province_id', $dpw);
        }
        if (!empty($words)) {
            $anggota = $anggota->where(DB::raw("name COLLATE {$collation}"), 'like', '%' . $words . '%')
                ->orWhere(DB::raw("no_anggota COLLATE {$collation}"), 'like', '%' . $words . '%')
                ->orWhere(DB::raw("no_str COLLATE {$collation}"), 'like', '%' . $words . '%')
                ->orWhereHas('province', function ($query) use ($words, $collation) {
                    $query->where(DB::raw("name COLLATE {$collation}"), 'like', '%' . $words . '%');
                })
                ->orWhereHas('city', function ($query) use ($words, $collation) {
                    $query->where(DB::raw("name COLLATE {$collation}"), 'like', '%' . $words . '%');
                })
                ->whereHas('suratStrs', function ($q) {
                    $q->where('status_aktif', 1);
                });
        }

        $anggota = $anggota->paginate(1000);

        return response()->json([
            'anggota' => $anggota,
        ]);
    }
}
