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
    public function index(Request $request)
    {
        $role = auth()->user()->getRoleNames();
        $isAdmin = ($role[0] ?? '') == 'admin' || ($role[0] ?? '') == 'admin wilayah';

        $q = $request->q;
        $province_id = $request->province_id;
        $city_id = $request->city_id;

        if ($isAdmin) {
            $users = User::where('confirm', 'true')
                ->when($q, function ($query) use ($q) {
                    $query->where(function ($sub) use ($q) {
                        $sub->where('name', 'like', "%{$q}%")
                            ->orWhere('email', 'like', "%{$q}%")
                            ->orWhere('no_anggota', 'like', "%{$q}%")
                            ->orWhere('nik', 'like', "%{$q}%")
                            ->orWhere('phone', 'like', "%{$q}%");
                    });
                })
                ->when($province_id, function ($query) use ($province_id) {
                    $query->where('province_id', $province_id);
                })
                ->when($city_id, function ($query) use ($city_id) {
                    $query->where('city_id', $city_id);
                })
                ->with('roles', 'province', 'city')
                ->orderBy('no_anggota', 'ASC')
                ->paginate(20)
                ->withQueryString();
        } else {
            $users = User::where('id', auth()->user()->id)
                ->where('confirm', 'true')
                ->with('roles', 'province', 'city')
                ->latest()
                ->paginate(10)
                ->withQueryString();
        }

        $pendingCount = User::where('confirm', 'false')->count();
        $provinces = Province::orderBy('name', 'ASC')->get();
        $cities = $province_id
            ? City::where('province_id', $province_id)->orderBy('name', 'ASC')->get()
            : City::orderBy('name', 'ASC')->get();

        return inertia('Account/Users/Index', [
            'users' => $users,
            'provinces' => $provinces,
            'cities' => $cities,
            'pendingCount' => $pendingCount,
            'filters' => [
                'q' => $q,
                'province_id' => $province_id,
                'city_id' => $city_id,
            ]
        ]);
    }

    public function verifikasiList(Request $request)
    {
        $role = auth()->user()->getRoleNames();
        $isAdmin = ($role[0] ?? '') == 'admin' || ($role[0] ?? '') == 'admin wilayah';

        if (!$isAdmin) {
            return redirect()->route('account.dashboard');
        }

        $q = $request->q;
        $province_id = $request->province_id;
        $city_id = $request->city_id;

        $users = User::where('confirm', 'false')
            ->when($q, function ($query) use ($q) {
                $query->where(function ($sub) use ($q) {
                    $sub->where('name', 'like', "%{$q}%")
                        ->orWhere('email', 'like', "%{$q}%")
                        ->orWhere('nik', 'like', "%{$q}%")
                        ->orWhere('phone', 'like', "%{$q}%");
                });
            })
            ->when($province_id, function ($query) use ($province_id) {
                $query->where('province_id', $province_id);
            })
            ->when($city_id, function ($query) use ($city_id) {
                $query->where('city_id', $city_id);
            })
            ->with('roles', 'province', 'city')
            ->latest()
            ->paginate(20)
            ->withQueryString();

        $provinces = Province::orderBy('name', 'ASC')->get();
        $cities = $province_id
            ? City::where('province_id', $province_id)->orderBy('name', 'ASC')->get()
            : City::orderBy('name', 'ASC')->get();

        return inertia('Account/Users/Verifikasi', [
            'users' => $users,
            'provinces' => $provinces,
            'cities' => $cities,
            'filters' => [
                'q' => $q,
                'province_id' => $province_id,
                'city_id' => $city_id,
            ]
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

        /**
         * Create user
         */
        //insert data user
        $user = User::create([
            'name'        => $request->name,
            'province_id' => $request->province_id,
            'city_id'     => $request->city_id,
            'no_anggota'  => User::generateNextNoAnggota(),
            'nik'         => $request->nik,
            'email'       => $request->email,
            'alamat'      => $request->alamat,
            'kelengkapan' => 'false',
            'password'    => bcrypt($request->password),
            'image'       => $image->hashName()
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
        /**
         * validate request
         */
        $this->validate(
            $request,
            [
                'name'         => 'required|string|max:255',
                'email'        => 'required|email|unique:users,email,' . $user->id,
                'province_id'  => 'required',
                'city_id'      => 'required',
                'nik'          => 'nullable|string|max:16',
                'phone'        => 'nullable|string|max:30',
                'password'     => 'nullable|confirmed|min:6',
                'image'        => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            ],
            [
                'name.required'        => 'Nama lengkap tidak boleh kosong',
                'email.required'       => 'Alamat email tidak boleh kosong',
                'email.email'          => 'Format email tidak valid',
                'email.unique'         => 'Alamat email sudah digunakan oleh pengguna lain',
                'province_id.required' => 'DPW (Provinsi) tidak boleh kosong',
                'city_id.required'     => 'DPC (Kota/Kab) tidak boleh kosong',
                'password.confirmed'   => 'Konfirmasi password baru tidak cocok',
                'password.min'         => 'Password baru minimal 6 karakter',
                'image.image'          => 'Berkas foto profil harus berupa file gambar',
                'image.max'            => 'Ukuran foto profil maksimal 2MB',
            ]
        );

        $updateData = [
            'name'           => $request->name,
            'province_id'    => $request->province_id,
            'city_id'        => $request->city_id,
            'nik'            => $request->nik,
            'email'          => $request->email,
            'phone'          => $request->phone,
            'alamat'         => $request->alamat,
            'no_str'         => $request->no_str,
            'confirm'        => 'true',
            'status_anggota' => $request->status_anggota,
            'date_exprd'     => $request->date_exprd,
        ];

        // Handle image upload properly (whether password is changed or not)
        if ($request->hasFile('image')) {
            if ($user->image) {
                Storage::disk('local')->delete('public/users/' . basename($user->image));
            }

            $image = $request->file('image');
            $image->storeAs('public/users', $image->hashName());
            $updateData['image'] = $image->hashName();
        }

        // Handle password update if filled
        if ($request->filled('password')) {
            $updateData['password'] = bcrypt($request->password);
        }

        $user->update($updateData);

        // Sync roles if provided
        if ($request->has('roles')) {
            $user->syncRoles($request->roles);
        }

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

    public function updateVerifikasiAnggota(Request $request, $user)
    {
        if (!($user instanceof User)) {
            $user = User::findOrFail($user);
        }

        $noAnggota = $user->no_anggota ?: User::generateNextNoAnggota();

        $user->update([
            'name'       => $request->name ?: $user->name,
            'confirm'    => 'true',
            'no_anggota' => $noAnggota,
        ]);

        //redirect
        return redirect()->route('account.users.verifikasi');
    }    
}
