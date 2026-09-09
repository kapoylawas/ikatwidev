<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Kegiatan;
use Illuminate\Http\Request;

class KegiatanController extends Controller
{
    public function index(Request $request)
    {
        $kegiatans = Kegiatan::when($request->q, function ($query, $q) {
            $query->where('name', 'like', '%' . $q . '%');
        })->latest()->paginate(9);

        $kegiatans->appends(['q' => $request->q]);

        return inertia('Web/Kegiatan/Index', [
            'kegiatans' => $kegiatans,
        ]);
    }
}
