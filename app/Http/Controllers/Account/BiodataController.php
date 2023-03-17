<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BiodataController extends Controller
{
    public function index()
    {
        $users = User::when(request()->q, function ($users) {
            $users = $users->where('name', 'like', '%' . request()->q . '%');
        })->with('roles', 'province', 'city')->where('id', auth()->user()->id)
        // ->orWhere('province_id', auth()->user()->province_id)
        ->latest()->paginate(5);

        //append query string to pagination links
        $users->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Biodatas/Index', [
            'users' => $users
        ]);
    }

    public function edit($id)
    {
        //get user
        $biodata = User::with('roles')->findOrFail($id);

        //get roles
        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/Biodatas/Edit', [
            'biodata' => $biodata,
            'provinces' => $provinces,
            'cities' => $cities
        ]);
    }

    public function update(Request $request, User $biodata)
    {
        /**
         * check password is empty
         */
        if ($request->password == '') {

            if ($request->file('image')) {
                //remove old image
                Storage::disk('local')->delete('public/users/' . basename($biodata->image));

                // upload new image
                $image = $request->file('image');
                $image->storeAs('public/users', $image->hashName());

                $biodata->update([
                    'name'      => $request->name,
                    'province_id'      => $request->province_id,
                    'city_id'      => $request->city_id,
                    'nik'      => $request->nik,
                    'email'     => $request->email,
                    'alamat'     => $request->alamat,
                    'no_str'     => $request->no_str,
                    'date_exprd'     => $request->date_exprd,
                    'image' => $image->hashName(),
                ]);
            } else {
                $biodata->update([
                    'name'      => $request->name,
                    'province_id'      => $request->province_id,
                    'city_id'      => $request->city_id,
                    'nik'      => $request->nik,
                    'email'     => $request->email,
                    'alamat'     => $request->alamat,
                    'no_str'     => $request->no_str,
                    'date_exprd'     => $request->date_exprd,
                ]);
            }
        } else {
            $biodata->update([
                'name'      => $request->name,
                'province_id'      => $request->province_id,
                'city_id'      => $request->city_id,
                'nik'      => $request->nik,
                'email'     => $request->email,
                'alamat'     => $request->alamat,
                'no_str'     => $request->no_str,
                'date_exprd'     => $request->date_exprd,
                'password' => bcrypt($request->password)
            ]);
        }

        //redirect
        return redirect()->route('account.biodatas.index');
    }
}
