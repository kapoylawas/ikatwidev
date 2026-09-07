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
        $cart = Cart::where('user_id', auth()->user()->id)
            ->where('product_id', $request->product_id)
            ->where('size', $request->size)
            ->first();

        if ($cart) {
            $newQty = $cart->qty + 1;
            $cart->update([
                'qty'    => $newQty,
                'price'  => $request->price * $newQty,
                'weight' => $request->weight * $newQty,
            ]);
        } else {
            Cart::create([
                'user_id'       => auth()->user()->id,
                'product_id'    => $request->product_id,
                'product_image' => "mpH4YHUa976Xl4D6vptZUp3naFTp72vXeYOYC1xt.png",
                'size'          => "Donasi",
                'price'         => (int) $request->price,
                'qty'           => 1,
                'tahun'         => null,
                'keterangan'    => $request->keterangan ?? null,
            ]);
        }

        return redirect()->route('web.carts.index')->with('success', 'Donasi berhasil ditambahkan ke keranjang');
    }
}
