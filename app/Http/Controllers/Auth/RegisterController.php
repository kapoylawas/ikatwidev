<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        //set validation
        $request->validate(
            [
                'name'      => 'required',
                'email'     => 'required|email|unique:users',
                'alamat'      => 'required',
                'password'  => 'required|confirmed',
            ],
            [
                'name.required' => 'name tidak boleh kosong',
                'email.required' => 'email tidak boleh kosong',
                'email.email' => 'email harus format EMAIL',
                'email.unique' => 'email sudah terdaftar',
                'alamat.required' => 'alamat tidak boleh kosong',
                'password.required' => 'password tidak boleh kosong',
                'password.confirmed' => 'password harus sama',
            ]
        );
        
        //insert data user
        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'alamat'     => $request->alamat,
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
