<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Wilayahdpc;
use Illuminate\Http\Request;

class WilayahdpcController extends Controller
{
    public function index()
    {
        $searchString = request()->q;

        // search join wilayah dpw province
        $wilayahdpc = Wilayahdpc::whereHas('city', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['city' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->latest()->paginate(10);
        

        //append query string to pagination links
        $wilayahdpc->appends(['q' => request()->q]);
        
        return inertia('Web/Wilayahdpc/Index', [
            'wilayahdpc' => $wilayahdpc
        ]);
    }
}
