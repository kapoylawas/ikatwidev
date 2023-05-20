<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Pengurus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PengurusController extends Controller
{
    public function index()
    {

        $pengurus = Pengurus::when(request()->q, function($pengurus) {
            $pengurus = $pengurus->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(5);

         //append query string to pagination links
         $pengurus->appends(['q' => request()->q]);

        return inertia('Account/Pengurus/Index', [
            'pengurus' => $pengurus
        ]);
    }

    public function Create()
    {

        //return inertia
        return inertia('Account/Pengurus/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'image'         => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'name'          => 'required',
        ]);

        //upload image
        $image = $request->file('image');
        $image->storeAs('public/pengurus', $image->hashName());

        //create category
        Pengurus::create([
            'image'         => $image->hashName(),
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('account.pengurus.index');
    }

    public function destroy($id)
    {
        //find by ID
        $pengurus = Pengurus::findOrFail($id);

        //remove image
        Storage::disk('local')->delete('public/categories/'.basename($pengurus->image));

        //delete
        $pengurus->delete();

        //redirect
        return redirect()->route('account.pengurus.index');
    }
}
