<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\Wilayahdpc;
use Illuminate\Http\Request;

class WilayahdpcAdminController extends Controller
{
    public function index()
    {
        $searchString = request()->q;

        // search join wilayah dpw province
        $wilayah = Wilayahdpc::whereHas('city', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['city' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->latest()->paginate(10);
        

        //append query string to pagination links
        $wilayah->appends(['q' => request()->q]);
        
        return inertia('Account/Wilayahdpc/Index', [
            'wilayah' => $wilayah
        ]);
    }

    public function Create()
    {

        //get all categories
        $wilayah = City::all();

        //return inertia
        return inertia('Account/Wilayahdpc/Create', [
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
        Wilayahdpc::create([
            'province_id'          => $request->province_id,
            'alamat'          => $request->alamat,
            'phone'          => $request->phone,
            'email'          => $request->email,
            'instagram'          => $request->instagram,
            'name_ketua'          => $request->name_ketua,
        ]);

        //redirect
        return redirect()->route('account.areadpc.index');
    }

    public function edit(Wilayahdpc $areadpc)
    {
        $city = City::all();

        return inertia('Account/Wilayahdpc/Edit', [
            'areadpc' => $areadpc,
            'city' => $city,
        ]);
    }

    public function update(Request $request, Wilayahdpc $areadpc)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'city_id'          => 'required',
            'alamat'          => 'required',
            'phone'          => 'required',
            'email'          => 'required',
            'instagram'          => 'required',
            'name_ketua'          => 'required',
        ]);

        //update category without image
        $areadpc->update([
            'city_id'          => $request->city_id,
            'alamat'          => $request->alamat,
            'phone'          => $request->phone,
            'email'          => $request->email,
            'instagram'          => $request->instagram,
            'name_ketua'          => $request->name_ketua,
        ]);

        //redirect
        return redirect()->route('account.areadpc.index');
    }

    public function destroy($id)
    {
        //find by ID
        $wilayah = Wilayahdpc::findOrFail($id);

        //delete
        $wilayah->delete();

        //redirect
        return redirect()->route('account.areadpc.index');
    }
}
