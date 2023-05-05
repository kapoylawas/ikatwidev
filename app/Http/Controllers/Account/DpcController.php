<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use Illuminate\Http\Request;

class DpcController extends Controller
{
    public function index()
    {

        $dpc = City::when(request()->q, function($dpc) {
            $dpc = $dpc->where('name', 'like', '%'. request()->q . '%');
        })->with('province')->latest()->paginate(10);

        $dpc->appends(['q' => request()->q]);

        return inertia('Account/Dpc/Index', [
            'dpc' => $dpc
        ]);
    }

    public function Create()
    {
        $provinces = Province::all();
        
        //return inertia
        return inertia('Account/Dpc/Create', [
            'provinces' => $provinces,
        ]);
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required',
            'province_id'      => 'required',
        ]);

        //create dpc
        City::create([
            'province_id'      => $request->province_id,
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('account.dpc.index');
    }

    public function edit(City $dpc)
    {
        $provinces = Province::all();

        return inertia('Account/Dpc/Edit', [
            'dpc' => $dpc,
            'provinces' => $provinces,
        ]);
    }

    public function update(Request $request, City $dpc)
    {
       
        //update dpc
        $dpc->update([
            'province_id'      => $request->province_id,
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('account.dpc.index');
    }

    public function destroy($id)
    {
        //find by ID
        $dpc = City::findOrFail($id);

        //delete
        $dpc->delete();

        //redirect
        return redirect()->route('account.dpc.index');
    }
}
