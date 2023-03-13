<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    public function index() {
        //render inertia
        return inertia('Web/Anggota/Index');
    }
}
