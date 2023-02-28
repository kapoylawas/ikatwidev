<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArtikelController extends Controller
{
    public function index() {

        //render inertia
        return inertia('Web/Artikel/Index');
    }
}
