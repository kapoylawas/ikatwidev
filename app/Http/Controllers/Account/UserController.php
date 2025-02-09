<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\SuratStr;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Storage;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public function index()
    {

        $role = auth()->user()->getRoleNames();

        if ($role[0] == 'admin' || $role[0] == 'admin wilayah') {

            //get users
            $users = User::when(request()->q, function ($users) {
                $users = $users->where('name', 'like', '%' . request()->q . '%');
            })->with('roles', 'province', 'city')
                ->where('confirm', 'true')
                ->orderBy('no_anggota', 'ASC')
                ->paginate(20);
        } else {
            $users = User::when(request()->q, function ($users) {
                $users = $users->where('name', 'like', '%' . request()->q . '%');
            })->with('roles', 'province', 'city')
                ->where('id', auth()->user()->id)
                ->where('confirm', 'true')
                ->latest()->paginate(10);
        }

        //append query string to pagination links
        $users->appends(['q' => request()->q]);


        // get user where confirm = false
        $role2 = auth()->user()->getRoleNames();

        if ($role2[0] == 'admin' || $role2[0] == 'admin wilayah') {
            //get users
            $users2 = User::when(request()->query, function ($users2) {
                $users2 = $users2->where('name', 'like', '%' . request()->qr . '%');
            })
                ->with('roles', 'province', 'city')
                ->where('confirm', 'false')
                ->orderBy('no_anggota', 'ASC')
                ->paginate(50)
                ->withQueryString();
        } else {
            $users2 = User::when(request()->qr, function ($users2) {
                $users2 = $users2->where('name', 'like', '%' . request()->qr . '%');
            })
                ->with('roles', 'province', 'city')
                ->where('id', auth()->user()->id)
                ->where('confirm', 'false')
                ->paginate(50)
                ->withQueryString();
        }

        //return inertia
        return inertia('Account/Users/Index', [
            'users' => $users,
            'users2' => $users2
        ]);
    }

    public function Create()
    {
        //get roles
        $roles = Role::all();
        $provinces = Province::all();
        $cities = City::all();

        $maxuser = User::count();


        //return inertia
        return inertia('Account/Users/Create', [
            'roles' => $roles,
            'provinces' => $provinces,
            'cities' => $cities,
            'maxuser' => $maxuser
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
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

        //upload image
        $image = $request->file('image');
        $image->storeAs('public/users', $image->hashName());

        $maxuser = User::count();
        // dd($maxuser);

        /**
         * Create user
         */
        //insert data user
        $user = User::create([
            'name'      => $request->name,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            'no_anggota'      => '10' . $maxuser + 1,
            'nik'      => $request->nik,
            'email'     => $request->email,
            'alamat'     => $request->alamat,
            'kelengkapan'     => 'false',
            'password'  => bcrypt($request->password),
            'image' => $image->hashName()
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

    public function verifikasiAnggota($id)
    {

        //get user
        $user = User::with('roles')->findOrFail($id);

        //get roles
        $roles = Role::all();
        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/Users/VerifikasiAnggota', [
            'user' => $user,
            'roles' => $roles,
            'provinces' => $provinces,
            'cities' => $cities
        ]);
    }

    public function update(Request $request, User $user)
    {
        // dd($request->all());
        // dd($user);
        /**
         * validate request
         */
        $this->validate(
            $request,
            [
                /* 'email'    => 'required|unique:users,email,' . $user->id,
                'alamat'      => 'required', */
                'name'     => 'required',
                'name'      => 'required',
                'province_id'      => 'required',
                'city_id'      => 'required',
                'password'  => 'required|confirmed',
                'password' => 'nullable|confirmed',
            ],
            [
                'name.required' => 'name tidak boleh kosong',
                'province_id.required' => 'DPW tidak boleh kosong',
                'city_id.required' => 'DPC tidak boleh kosong',
                'password.required' => 'password tidak boleh kosong',
            ]
        );

        /**
         * check password is empty
         */
        if ($request->password == '') {

            if ($request->file('image')) {
                //remove old image
                Storage::disk('local')->delete('public/users/' . basename($user->image));

                // upload new image
                $image = $request->file('image');
                $image->storeAs('public/users', $image->hashName());


                $user->update([
                    'name'      => $request->name,
                    'province_id'      => $request->province_id,
                    'city_id'      => $request->city_id,
                    'nik'      => $request->nik,
                    'email'     => $request->email,
                    'alamat'     => $request->alamat,
                    'no_str'     => $request->no_str,
                    'confirm'      => 'true',
                    'status_anggota'     => $request->status_anggota,
                    'date_exprd'     => $request->date_exprd,
                    'image' => $image->hashName(),
                ]);
            } else {
                $user->update([
                    'name'      => $request->name,
                    'province_id'      => $request->province_id,
                    'city_id'      => $request->city_id,
                    'nik'      => $request->nik,
                    'email'     => $request->email,
                    'alamat'     => $request->alamat,
                    'no_str'     => $request->no_str,
                    'confirm'      => 'true',
                    'status_anggota'     => $request->status_anggota,
                    'date_exprd'     => $request->date_exprd,
                ]);
            }
        } else {
            $user->update([
                'name'      => $request->name,
                'province_id'      => $request->province_id,
                'city_id'      => $request->city_id,
                'nik'      => $request->nik,
                'email'     => $request->email,
                'alamat'     => $request->alamat,
                'no_str'     => $request->no_str,
                'confirm'      => 'true',
                'date_exprd'     => $request->date_exprd,
                'status_anggota'     => $request->status_anggota,
                'password' => bcrypt($request->password)
            ]);
        }

        //assign roles to user
        $user->syncRoles($request->roles);

        //redirect
        return redirect()->route('account.users.index');
    }

    public function ceAktiv()
    {
        $user = User::whereNull('status_aktif')->get();

        $data = [];

        foreach ($user as $u) {
            if (strtotime(date('Y-m-d')) >= strtotime($u->date_exprd)) {
                $data[] = $u->id;
            }
        }

        // dd($data);

        User::whereIn('id', $data)->update(['status_aktif' => 1]);


        return 'berhasil';
    }

    public function ceAktistr()
    {
        $user = SuratStr::whereNull('status_aktif')->get();

        $data = [];

        foreach ($user as $u) {
            if (strtotime(date('Y-m-d')) >= strtotime($u->date_end)) {
                $data[] = $u->id;
            }
        }

        // dd($data);

        SuratStr::whereIn('id', $data)->update(['status_aktif' => 1]);


        return 'berhasil';
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

    public function updateVerifikasiAnggota(Request $request, User $user)
    {

        $maxuser = User::whereNotNull('no_anggota')->count() + 1;

        $user->update([
            'name'      => $request->name,
            'confirm'      => 'true',
            'no_anggota'      => '10' . $maxuser,
        ]);

        //redirect
        return redirect()->route('account.users.index');
    }    
}
