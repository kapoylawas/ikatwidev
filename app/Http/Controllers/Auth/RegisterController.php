<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\City;
use App\Models\Province;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RegisterController extends Controller
{
    public function index()
    {
        //get all categories
        $provinces = Province::all();
        $cities = City::all();

        return inertia('Auth/Register', [
            'provinces' => $provinces,
            'cities' => $cities
        ]);
    }

    public function getCities(Request $request)
    {
        //get cities by province ID
        $cities = City::where('province_id', $request->province_id)->get();

        //return
        return response()->json($cities);
    }

    public function store(Request $request)
    {
        //set validation
        $request->validate(
            [
                'name'      => 'required',
                'province_id'      => 'required',
                'city_id'      => 'required',
                'nik'      => 'required|max:16|min:16|unique:users',
                'email'     => 'required|email|unique:users',
                'alamat'      => 'required',
                'filepakta'      => 'required|mimes:pdf|max:2048',
                'password'  => 'required|confirmed',
            ],
            [
                'name.required' => 'name tidak boleh kosong',
                'province_id.required' => 'DPW tidak boleh kosong',
                'city_id.required' => 'DPC tidak boleh kosong',
                'nik.required' => 'nik tidak boleh kosong',
                'nik.max' => 'nik harus 16 angka',
                'nik.min' => 'nik harus 16 angka',
                'nik.unique' => 'nik sudah terdaftar',
                'email.required' => 'email tidak boleh kosong',
                'email.email' => 'email harus format EMAIL',
                'email.unique' => 'email sudah terdaftar',
                'alamat.required' => 'alamat tidak boleh kosong',
                'filepakta.required' => 'File pakta integritas tidak boleh kosong',
                'filepakta.mimes' => 'File pakta integritas harus PDF',
                'filepakta.required' => 'File pakta integritas harus 2mb',
                'password.required' => 'password tidak boleh kosong',
                'password.confirmed' => 'password harus sama',
            ]
        );
        
         //upload image
         $filepakta = $request->file('filepakta');
         $filepakta->storeAs('public/filepakta', $filepakta->hashName());

        // $maxuser = User::count();

        //insert data user
        $user = User::create([
            'name'      => $request->name,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            // 'no_anggota'      => '10'.$maxuser+1,
            'nik'      => $request->nik,
            'email'     => $request->email,
            'alamat'     => $request->alamat,
            'filepakta' => $filepakta->hashName(),
            'password'  => bcrypt($request->password)
        ]);

        //find role "member
        $role = Role::findByName('member');

        //assing role "member" to user
        $user->assignRole($role);

        //redirect to login
        return redirect()->route('login');
    }
}
