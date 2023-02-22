<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index() {
         //get categories
         $categories = Category::when(request()->q, function($categories) {
            $categories = $categories->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(5);

         //append query string to pagination links
         $categories->appends(['q' => request()->q]);

         return inertia('Account/Categories/Index', [
            'categories' => $categories
         ]);
    }   

    public function Create()
    {

        //return inertia
        return inertia('Account/Categories/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'image'         => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'name'          => 'required|unique:categories',
        ]);

        //upload image
        $image = $request->file('image');
        $image->storeAs('public/categories', $image->hashName());

        //create category
        Category::create([
            'image'         => $image->hashName(),
            'name'          => $request->name,
            'slug'          => Str::slug($request->name, '-')
        ]);

        //redirect
        return redirect()->route('account.categories.index');
    }

    public function edit(Category $category)
    {
        return inertia('Account/Categories/Edit', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, Category $category)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:categories,name,'.$category->id,
        ]);

        //check image update
        if ($request->file('image')) {

            //remove old image
            Storage::disk('local')->delete('public/categories/'.basename($category->image));
        
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/categories', $image->hashName());

            //update category with new image
            $category->update([
                'image'=> $image->hashName(),
                'name' => $request->name,
                'slug'          => Str::slug($request->name, '-')
            ]);

        }

        //update category without image
        $category->update([
            'name'          => $request->name,
            'slug'          => Str::slug($request->name, '-')
        ]);

        //redirect
        return redirect()->route('account.categories.index');
    }

    public function destroy($id)
    {
        //find by ID
        $category = Category::findOrFail($id);

        //remove image
        Storage::disk('local')->delete('public/categories/'.basename($category->image));

        //delete
        $category->delete();

        //redirect
        return redirect()->route('account.categories.index');
    }
}
