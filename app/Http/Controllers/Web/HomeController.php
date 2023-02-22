<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //get sliders
        $sliders = Slider::latest()->get();

        //get categories 4 items
        $categories = Category::latest()->take(4)->get();

        //get products
        $products = Product::with('productImages', 'productSizes')->latest()->take(8)->get();

        return inertia('Web/Home/Index', [
            'sliders'       => $sliders,
            'categories'    => $categories,
            'products'      => $products
        ]);
    }
}
