<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Transaction;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        //return inertia
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        //set validation
        $request->validate(
            [
                'no_anggota'     => 'required',
                'password'  => 'required',
            ],
            [
                'no_anggota.required' => 'no anggota tidak boleh kosong',
                // 'email.email' => 'format email anda salah',
                'password.required' => 'password tidak boleh kosong',
            ]
        );

        //get email and password from request
        $credentials = $request->only('no_anggota', 'password');

        //attempt to login
        if (auth()->attempt($credentials)) {

            //regenerate session
            $request->session()->regenerate();

            $tahun = date('Y');
            $cektransaction = Transaction::where('user_id', auth()->user()->id)
                    ->where('tahun', $tahun)->first();
            $cekcart = Cart::where('user_id', auth()->user()->id)
                    ->where('tahun', $tahun)->first();
            

            // kondisi jika di tabel transcation dan cart ada user dan tahun maka tidak insert
            if (!$cektransaction && !$cekcart) {
                Cart::insert([
                    'user_id'       => auth()->user()->id,
                    'product_id'    => 1,
                    'price'         => 50000,
                    'tahun'           => $tahun,
                    'weight'        => $request->weight
                ]);
            }
           

            //redirect route dashboard
            return redirect()->route('account.dashboard');
        }

        //if login fails
        return back()->withErrors([
            'no_anggota' => 'The provided credentials do not match our records.',
        ]);
    }
}
