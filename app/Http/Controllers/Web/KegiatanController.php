<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KegiatanController extends Controller
{
    public function index() {
        //render inertia
        return inertia('Web/Kegiatan/Index');
    }
}
