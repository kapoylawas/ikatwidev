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
        
        //calculate total price
        $totalPrice = $carts->sum('price');
        
        return inertia('Web/Carts/Index', [
            'carts'       => $carts,
            'dataCarts'   => [
                'price' => $totalPrice,
                'count' => $carts->count(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $targetYear = $request->tahun ?? date('Y');
        $query = Cart::where('user_id', auth()->user()->id)
            ->where('product_id', $request->product_id)
            ->where('size', $request->size);

        if ($request->size === 'Iuran') {
            $query->where('tahun', $targetYear);
        }

        $cart = $query->first();

        if ($cart) {
            if ($request->size === 'Iuran') {
                $cart->update([
                    'qty'   => 1,
                    'price' => (int) $request->price,
                ]);
            } else {
                $newQty = $cart->qty + 1;
                $cart->update([
                    'qty'    => $newQty,
                    'price'  => $request->price * $newQty,
                    'weight' => $request->weight * $newQty,
                ]);
            }
        } else {
            Cart::create([
                'user_id'       => auth()->user()->id,
                'product_id'    => $request->product_id,
                'product_image' => $request->product_image,
                'size'          => $request->size,
                'price'         => (int) $request->price,
                'qty'           => 1,
                'tahun'         => $request->size === 'Iuran' ? $targetYear : null,
                'weight'        => $request->weight ?? 0,
                'keterangan'    => $request->keterangan ?? null,
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
