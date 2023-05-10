<?php

namespace App\Http\Controllers\Account;

use App\Models\Product;
use App\Models\Category;
use App\Models\ProductImage;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;



class ProductController extends Controller
{
    public function index()
    {
        //get products
        $products = Product::when(request()->q, function($products) {
            $products = $products->where('title', 'like', '%'. request()->q . '%');
        })->with('category')->latest()->paginate(5);

        $products->appends(['q' => request()->q]);

        return inertia('Account/Products/Index', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        //get all categories
        $categories = Category::all();

        return inertia('Account/Products/Create', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title'         => 'required',
            'category_id'   => 'required',
            'description'   => 'required',
            'product_sizes' => 'required|array'
        ],
        [
            'title.required' => 'title tidak boleh kosong',
            'category_id.required' => 'category tidak boleh kosong',
            'description.required' => 'description tidak boleh kosong',
            'product_sizes.required' => 'product sizes tidak boleh kosong',
        ]);

        /**
         * Create product
         */
        $product = Product::create([
            'title'         => $request->title,
            'slug'          => Str::slug($request->title, '-'),
            'category_id'   => $request->category_id,
            'description'   => $request->description,
            'status'   => 2,
        ]);

        //insert product size and price
        if($request->product_sizes > 0) {
            
            foreach($request->product_sizes as $data) {

                $product->productSizes()->create([
                    'size'   => $data['size'],
                    'price'  => (int) $data['price']
                ]);

            }
        }

         //redirect
         return redirect()->route('account.products.index');
    }

    public function show($id)
    {
        //get product by ID
        $product = Product::findOrFail($id);

        //get relation productImages with pagination
        $product->setRelation('productImages', $product->productImages()->paginate(5));

        //return
        return inertia('Account/Products/Show', [
            'product'   => $product,
        ]);
    }

    public function edit($id)
    {
        //get product
        $product = Product::with('productSizes')->findOrFail($id);

        //get all categories
        $categories = Category::all();

        //render with inertia
        return inertia('Account/Products/Edit', [
            'product'       => $product,
            'categories'    => $categories
        ]);
    }

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'title'         => 'required',
            'category_id'   => 'required',
            'description'   => 'required',
            'product_sizes' => 'required|array'
        ]);

        /**
         * Create product
         */
        $product->update([
            'title'         => $request->title,
            'slug'          => Str::slug($request->title, '-'),
            'category_id'   => $request->category_id,
            'description'   => $request->description,
        ]);

        //insert or update product size and price
        if($request->product_sizes > 0) {

            //delete array
            $id = Arr::pluck($request->product_sizes, 'id');
            $product->productSizes()->whereNotIn('id', $id)->delete();

            foreach($request->product_sizes as $data) {

                //check product size and price
                $size = $product->productSizes()->where('product_id', $product->id)->where('size', $data['size'])->first();

                if($size) {
                    //update product size
                    $size->update([
                        'size'  => $data['size'],
                        'price' => (int) $data['price'],
                    ]);
                } else {
                    //insert product size
                    $product->productSizes()->create([
                        'size'   => $data['size'],
                        'price'  => (int) $data['price']
                    ]);
                }

            }
        }

        //redirect
        return redirect()->route('account.products.index');
    }

    public function storeImageProduct(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'image'      => 'required|mimes:png,jpg',
        ]);

        //get product by ID
        $product = Product::findOrFail($request->product_id);

        //get request file image
        $image = $request->file('image');
            
        //move to storage folder
        $image->storeAs('public/products', $image->hashName());

        //insert database
        $product->productImages()->create([
            'image'     => $image->hashName(),
        ]);

        //return back
        return redirect()->back();
    }
    
    public function destroyImage($id)
    {
        //find product image by ID
        $product_image = ProductImage::findOrFail($id);

        //remove image from server
        Storage::disk('local')->delete('public/products/'.basename($product_image->image));

        //delete image
        $product_image->delete();

        //redirect
        return redirect()->back();
    }
}
