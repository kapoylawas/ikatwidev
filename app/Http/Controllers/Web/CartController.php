<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        //get carts by user
        $carts = Cart::with('product')
                ->where('user_id', auth()->user()->id)
                ->latest()
                ->get();
        
        return inertia('Web/Carts/Index', [
            'carts'       => $carts,
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
                'product_image' => $request->product_image,
                'size'          => $request->size,
                'price'         => (int) $request->price,
                'qty'           => $request->qty,
                'tahun'           => 2023,
                'weight'        => $request->weight
            ]);

        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        //get carts by id
        $cart = Cart::with('product')
                ->where('user_id', auth()->user()->id)
                ->where('id', $id)
                ->first();
        
        //delete cart
        if($cart) {
            $cart->delete();
        }

        //return
        return redirect()->back();
    }
}
