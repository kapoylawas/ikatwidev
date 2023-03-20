<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;

class TagihanController extends Controller
{
    public function index()
    {
        $searchString = request()->q;

        $tagihans = Cart::whereHas('user', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['user' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->where('user_id', auth()->user()->id)->latest()->paginate(10);

        $tagihans->appends(['q' => request()->q]);

        return inertia('Account/Tagihan/Index', [
            'tagihans' => $tagihans,
        ]);
    }
}
