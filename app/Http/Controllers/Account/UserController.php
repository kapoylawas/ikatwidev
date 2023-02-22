<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        //get users
        $users = User::when(request()->q, function ($users) {
            $users = $users->where('name', 'like', '%' . request()->q . '%');
        })->with('roles', 'province', 'city')->latest()->paginate(5);

        //append query string to pagination links
        $users->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Users/Index', [
            'users' => $users
        ]);
    }

    public function Create()
    {
        //get roles
        $roles = Role::all();
        $provinces = Province::all();
        $cities = City::all();

        //return inertia
        return inertia('Account/Users/Create', [
            'roles' => $roles,
            'provinces' => $provinces,
            'cities' => $cities
        ]);
    }

    public function store(Request $request)
    {
        /**
         * Validate request
         */
        //set validation
        $request->validate(
            [
                'email'     => 'required|email|unique:users',
                'name'      => 'required',
                'province_id'      => 'required',
                'city_id'      => 'required',
                'nik'      => 'required|max:16|min:16',
                'alamat'      => 'required',
                'password'  => 'required|confirmed',
            ],
            [
                'name.required' => 'name tidak boleh kosong',
                'province_id.required' => 'DPW tidak boleh kosong',
                'city_id.required' => 'DPC tidak boleh kosong',
                'nik.required' => 'nik tidak boleh kosong',
                'nik.max' => 'nik harus 16 angka',
                'nik.min' => 'nik harus 16 angka',
                'email.required' => 'email tidak boleh kosong',
                'email.email' => 'email harus format EMAIL',
                'email.unique' => 'email sudah terdaftar',
                'alamat.required' => 'alamat tidak boleh kosong',
                'password.required' => 'password tidak boleh kosong',
                'password.confirmed' => 'password harus sama',
            ]
        );

        /**
         * Create user
         */
        //insert data user
        $user = User::create([
            'name'      => $request->name,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            'nik'      => $request->nik,
            'email'     => $request->email,
            'alamat'     => $request->alamat,
            'password'  => bcrypt($request->password)
        ]);

        //assign roles to user
        $user->assignRole($request->roles);

        //redirect
        return redirect()->route('account.users.index');
    }

    public function edit($id)
    {

        //get user
        $user = User::with('roles')->findOrFail($id);

        //get roles
        $roles = Role::all();
        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/Users/Edit', [
            'user' => $user,
            'roles' => $roles,
            'provinces' => $provinces,
            'cities' => $cities
        ]);
    }

    public function update(Request $request, User $user)
    {
        // dd($user->id);
        /**
         * validate request
         */
        $this->validate(
            $request,
            [
                'email'    => 'required|unique:users,email,' . $user->id,
                'name'     => 'required',
                'name'      => 'required',
                'province_id'      => 'required',
                'city_id'      => 'required',
                'nik'      => 'required|max:16|min:16',
                'alamat'      => 'required',
                'password'  => 'required|confirmed',
                'password' => 'nullable|confirmed'
            ],
            [
                'name.required' => 'name tidak boleh kosong',
                'province_id.required' => 'DPW tidak boleh kosong',
                'city_id.required' => 'DPC tidak boleh kosong',
                'nik.required' => 'nik tidak boleh kosong',
                'nik.max' => 'nik harus 16 angka',
                'nik.min' => 'nik harus 16 angka',
                'email.required' => 'email tidak boleh kosong',
                'email.email' => 'email harus format EMAIL',
                'email.unique' => 'email sudah terdaftar',
                'alamat.required' => 'alamat tidak boleh kosong',
                'password.required' => 'password tidak boleh kosong',
            ]
        );

        /**
         * check password is empty
         */
        if ($request->password == '') {

            $user->update([
                'name'      => $request->name,
                'province_id'      => $request->province_id,
                'city_id'      => $request->city_id,
                'nik'      => $request->nik,
                'email'     => $request->email,
                'alamat'     => $request->alamat,
            ]);
        } else {

            $user->update([
                'name'      => $request->name,
                'province_id'      => $request->province_id,
                'city_id'      => $request->city_id,
                'nik'      => $request->nik,
                'alamat'     => $request->alamat,
                'email'     => $request->email,
                'password' => bcrypt($request->password)
            ]);
        }

        //assign roles to user
        $user->syncRoles($request->roles);

        //redirect
        return redirect()->route('account.users.index');
    }

    public function destroy($id)
    {
        //find user
        $user = User::findOrFail($id);

        //delete user
        $user->delete();

        //redirect
        return redirect()->route('account.users.index');
    }
    
}
