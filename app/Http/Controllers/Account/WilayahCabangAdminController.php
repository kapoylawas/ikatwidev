<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Province;
use App\Models\Wilayah;
use Illuminate\Http\Request;

class WilayahCabangAdminController extends Controller
{
    public function index(Request $request)
    {
        $searchString = request()->q;

        // search join wilayah dpw province
        $wilayah = Wilayah::whereHas('province', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['province' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->latest()->paginate(10);
        

        //append query string to pagination links
        $wilayah->appends(['q' => request()->q]);
        
        return inertia('Account/WilayahCabang/Index', [
            'wilayah' => $wilayah
        ]);
    }

    public function Create()
    {

        //get all categories
        $wilayah = Province::all();

        //return inertia
        return inertia('Account/WilayahCabang/Create', [
            'wilayah' => $wilayah
        ]);
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'province_id'          => 'required',
            'alamat'          => 'required',
            'phone'          => 'required',
            'email'          => 'required',
            'instagram'          => 'required',
            'name_ketua'          => 'required',
        ]);


        //create category
        Wilayah::create([
            'province_id'          => $request->province_id,
            'alamat'          => $request->alamat,
            'phone'          => $request->phone,
            'email'          => $request->email,
            'instagram'          => $request->instagram,
            'name_ketua'          => $request->name_ketua,
            'lat'          => $request->lat,
            'long'          => $request->long,
        ]);

        //redirect
        return redirect()->route('account.wilayah.index');
    }

    public function edit(Wilayah $wilayah)
    {
        $provinces = Province::all();

        return inertia('Account/WilayahCabang/Edit', [
            'wilayah' => $wilayah,
            'provinces' => $provinces,
        ]);
    }

    public function update(Request $request, Wilayah $wilayah)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'province_id'          => 'required',
            'alamat'          => 'required',
            'phone'          => 'required',
            'email'          => 'required',
            'instagram'          => 'required',
            'name_ketua'          => 'required',
        ]);

        //update category without image
        $wilayah->update([
            'province_id'          => $request->province_id,
            'alamat'          => $request->alamat,
            'phone'          => $request->phone,
            'email'          => $request->email,
            'instagram'          => $request->instagram,
            'name_ketua'          => $request->name_ketua,
            'lat'          => $request->lat,
            'long'          => $request->long,
        ]);

        //redirect
        return redirect()->route('account.wilayah.index');
    }

    public function destroy($id)
    {
        //find by ID
        $wilayah = Wilayah::findOrFail($id);

        //delete
        $wilayah->delete();

        //redirect
        return redirect()->route('account.wilayah.index');
    }
}
