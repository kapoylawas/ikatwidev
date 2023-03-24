<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BiodataController extends Controller
{
    public function index()
    {
        
        $biodata = User::where('id', auth()->user()->id)->first();

        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('grand_total', 50000)
            ->where('tahun', $tahun)->first();

        //return inertia
        return inertia('Account/Biodatas/Index', [
            'biodata' => $biodata,
            'transactions' => $transactions,
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
        // dd($request->all());
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
                    'nik'      => $request->nik,
                    'email'     => $request->email,
                    'alamat'     => $request->alamat,
                    'no_str'     => $request->no_str,
                    'phone'     => $request->phone,
                    'tempat_lahir'     => $request->tempat_lahir,
                    'tgl_lahir'     => $request->tgl_lahir,
                    'lokasi_pekerjaan'     => $request->lokasi_pekerjaan,
                    'image' => $image->hashName(),
                ]);
            } else {
                $biodata->update([
                    'name'      => $request->name,
                    'nik'      => $request->nik,
                    'email'     => $request->email,
                    'alamat'     => $request->alamat,
                    'no_str'     => $request->no_str,
                    'phone'     => $request->phone,
                    'tempat_lahir'     => $request->tempat_lahir,
                    'tgl_lahir'     => $request->tgl_lahir,
                    'lokasi_pekerjaan'     => $request->lokasi_pekerjaan,
                ]);
            }
        } else {
            $biodata->update([
                'name'      => $request->name,
                'nik'      => $request->nik,
                'email'     => $request->email,
                'alamat'     => $request->alamat,
                'no_str'     => $request->no_str,
                'phone'     => $request->phone,
                'tempat_lahir'     => $request->tempat_lahir,
                'tgl_lahir'     => $request->tgl_lahir,
                'lokasi_pekerjaan'     => $request->lokasi_pekerjaan,
                'password' => bcrypt($request->password)
            ]);
        }

        //redirect
        return redirect()->route('account.biodatas.index');
    }
}
