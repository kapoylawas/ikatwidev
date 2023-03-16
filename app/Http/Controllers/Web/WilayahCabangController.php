<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WilayahCabangController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Web/WilayahCabang/Index');
    }
}
