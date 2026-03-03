<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Cart;
use Illuminate\Http\Request;

class DonasiController extends Controller
{
    public function index()
    {
        $donasi = Product::where('id', 4)
            ->with('category')
            ->first();

        return inertia('Account/Donasi/Index', [
            'donasi' => $donasi
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        //check cart
        $cart = Cart::where('product_id', $request->product_id)->where('size', $request->size);

        if($cart->count()) {

            //increment / update quantity
            $cart->increment('qty');

            $cart = $cart->first();

            //sum price * quantity
            $price = $request->price * $cart->qty;

            //sum weight
            $weight = $request->weight * $cart->qty;

            $cart->update([
                'price'     => $price,
                'weight'    => $weight
            ]);

        } else {

            //insert data to carts
            Cart::insert([
                'user_id'       => auth()->user()->id,
                'product_id'    => $request->product_id,
                'product_image' => "mpH4YHUa976Xl4D6vptZUp3naFTp72vXeYOYC1xt.png",
                'size'          => "Donasi",
                'price'         => (int) $request->price,
                'qty'           => "1",
                'tahun'         => "",
                'keterangan'    => $request->keterangan ?? null,
            ]);

        }

        return redirect()->route('web.carts.index')->with('success', 'Donasi berhasil ditambahkan ke keranjang');
    }
}
