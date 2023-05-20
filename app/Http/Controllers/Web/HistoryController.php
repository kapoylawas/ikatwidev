<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Pengurus;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function index() {

        $pengurus = Pengurus::when(request()->q, function($pengurus) {
            $pengurus = $pengurus->where('name', 'like', '%'. request()->q . '%');
        })->orderBy('id', 'ASC')->paginate(10);

         //append query string to pagination links
         $pengurus->appends(['q' => request()->q]);
         
        //render inertia
        return inertia('Web/History/Index',[
            'pengurus' => $pengurus
        ]);
    }
}
