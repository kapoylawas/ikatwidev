<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Kegiatan;
use Illuminate\Http\Request;

class KegiatanController extends Controller
{
    public function index() {

        //get products
        $kegiatans = Kegiatan::with('productImages', 'productSizes')->latest()->paginate(8);

        //render inertia
        return inertia('Web/Kegiatan/Index', [
            'kegiatans' => $kegiatans,
        ]);
    }
}
