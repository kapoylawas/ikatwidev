<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Wilayah;
use Illuminate\Http\Request;

class WilayahCabangController extends Controller
{
    public function index(Request $request)
    {
        $searchString = request()->q;

        // search join wilayah dpw province
        $wilayah = Wilayah::whereHas('province', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['province' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->latest()->paginate(10);
        

        //append query string to pagination links
        $wilayah->appends(['q' => request()->q]);

        return inertia('Web/WilayahCabang/Index', [
            'wilayah' => $wilayah
        ]);
    }
}
