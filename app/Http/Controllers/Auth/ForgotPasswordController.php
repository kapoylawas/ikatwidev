<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    public function index()
    {
        //return inertia
        return inertia('Auth/LupaPassword');
    }
    public function store(Request $request)
    {
        $request->validate([
            'no_anggota' => 'required|string',
            'nik'        => 'required|string',
        ]);

        $identifier = trim($request->no_anggota);
        $nik = trim($request->nik);

        // Mencari user berdasarkan (no_anggota atau email) dan nik
        $user = User::where(function ($q) use ($identifier) {
            $q->where('no_anggota', $identifier)
              ->orWhere('email', $identifier);
        })
        ->where('nik', $nik)
        ->first();

        if ($user) {
            // Update password menjadi NIK
            $user->password = bcrypt(trim($user->nik));
            $user->save();

            // Redirect ke route login dengan notifikasi sukses
            return redirect()->route('login')->with('success', 'Password berhasil direset! Password baru Anda adalah NIK Anda. Silakan login.');
        }

        // Jika user tidak ditemukan, redirect dengan pesan error
        return back()->withErrors([
            'meta' => 'Nomor Anggota / Email atau NIK tidak sesuai.',
        ]);
    }
}
