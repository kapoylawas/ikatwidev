<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        //get products
        $products = Product::with('productImages', 'productSizes')->latest()->paginate(8);

        //return inertia
        return inertia('Web/Products/Index', [
            'products' => $products,
        ]);
    }

    public function show($slug)
    {
        //get product
        $product = Product::where('slug', $slug)->with('productImages', 'productSizes')->firstOrFail();

        //render inertia
        return inertia('Web/Products/Show', [
            'product' => $product
        ]);
    }
}
