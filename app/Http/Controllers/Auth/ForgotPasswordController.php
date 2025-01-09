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
            'nik' => 'required|string',
        ]);

        // Mencari user berdasarkan no_anggota dan nik
        $user = User::where('no_anggota', $request->no_anggota)
                    ->where('nik', $request->nik)
                    ->first();

        if ($user) {
            // Jika user ditemukan, update password menjadi nik
            $user->password = bcrypt($user->nik);
            $user->save();

            // Redirect ke route dashboard
            return redirect()->route('account.dashboard')->with('success', 'Password berhasil direset.');
        }

        // Jika user tidak ditemukan, redirect dengan pesan error
        return back()->withErrors([
            'meta' => 'No KTA atau NIK Anda Salah',
        ]);
    }
}
