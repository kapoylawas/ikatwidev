<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Wilayahdpc;
use Illuminate\Http\Request;

class WilayahdpcAdminController extends Controller
{
    public function index()
    {
        $searchString = request()->q;

        // search join wilayah dpw province
        $wilayah = Wilayahdpc::whereHas('province', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['province' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->latest()->paginate(10);
        

        //append query string to pagination links
        $wilayah->appends(['q' => request()->q]);
        
        return inertia('Account/Wilayahdpc/Index', [
            'wilayah' => $wilayah
        ]);
    }
}
