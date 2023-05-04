<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Province;
use Illuminate\Http\Request;

class DpwController extends Controller
{
    
    public function index()
    {

        $dpw = Province::when(request()->q, function($dpw) {
            $dpw = $dpw->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(10);

         $dpw->appends(['q' => request()->q]);

        return inertia('Account/Dpw/Index', [
            'dpw' => $dpw
        ]);
    }

    public function Create()
    {
        //return inertia
        return inertia('Account/Dpw/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:categories',
        ]);

        //create dpw
        Province::create([
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('account.dpw.index');
    }

    public function edit(Province $dpw)
    {
        return inertia('Account/Dpw/Edit', [
            'dpw' => $dpw,
        ]);
    }

    public function update(Request $request, Province $dpw)
    {
       
        //update dpw
        $dpw->update([
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('account.dpw.index');
    }

    public function destroy($id)
    {
        //find by ID
        $dpw = Province::findOrFail($id);

        //delete
        $dpw->delete();

        //redirect
        return redirect()->route('account.dpw.index');
    }
}
