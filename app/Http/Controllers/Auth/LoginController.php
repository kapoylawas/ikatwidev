<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Transaction;
use App\Models\User;
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

            // Auto-expire old unpaid transactions
            Transaction::expireOldUnpaidTransactions(auth()->user()->id);

            $tahun = (int) date('Y');
            $user = auth()->user();

            $isAnggotaKehormatan = $user->status_anggota === 'Anggota Kehormatan';
            $paidTransaction = Transaction::where('user_id', $user->id)
                ->where('tahun', $tahun)
                ->where('status', 'PAID')
                ->first();
            $unpaidTransaction = Transaction::where('user_id', $user->id)
                ->where('tahun', $tahun)
                ->where('status', 'UNPAID')
                ->first();
            $cekcart = Cart::where('user_id', $user->id)
                ->where('tahun', $tahun)
                ->first();

            // If not paid, no active unpaid transaction, not in cart, and not Anggota Kehormatan:
            if (!$paidTransaction && !$unpaidTransaction && !$cekcart && !$isAnggotaKehormatan) {
                Cart::create([
                    'user_id'       => $user->id,
                    'product_id'    => 1,
                    'product_image' => 'gMreGxufmxSztWIZGMmFy8wCsy9rIdxvjCH2uj2M.png',
                    'size'          => 'Iuran',
                    'qty'           => 1,
                    'price'         => ($user->status_anggota == 'Anggota Baru' || $user->status_anggota == 'Anggota Muda') ? 100000 : 300000,
                    'tahun'         => $tahun,
                    'weight'        => 0,
                    'keterangan'    => 'Iuran Anggota IKATWI Tahun ' . $tahun,
                ]);
            }

            //redirect route dashboard
            return redirect()->route('account.dashboard');
        }

        //if login fails
        return back()->withErrors([
            'no_anggota' => 'no anggota anda salah.',
            'password' => 'password anda salah',
        ]);
    }

    public function storeAnggotaBaru(Request $request)
    {
        //set validation
        $request->validate(
            [
                'no_anggota'     => 'required',
                'password'  => 'required',
            ],
            [
                'no_anggota.required' => 'no anggota baru tidak boleh kosong',
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

            // Auto-expire old unpaid transactions
            Transaction::expireOldUnpaidTransactions(auth()->user()->id);

            $tahun = (int) date('Y');
            $user = auth()->user();

            $isAnggotaKehormatan = $user->status_anggota === 'Anggota Kehormatan';
            $paidTransaction = Transaction::where('user_id', $user->id)
                ->where('tahun', $tahun)
                ->where('status', 'PAID')
                ->first();
            $unpaidTransaction = Transaction::where('user_id', $user->id)
                ->where('tahun', $tahun)
                ->where('status', 'UNPAID')
                ->first();
            $cekcart = Cart::where('user_id', $user->id)
                ->where('tahun', $tahun)
                ->first();

            if (!$paidTransaction && !$unpaidTransaction && !$cekcart && !$isAnggotaKehormatan) {
                Cart::create([
                    'user_id'       => $user->id,
                    'product_id'    => 1,
                    'product_image' => 'gMreGxufmxSztWIZGMmFy8wCsy9rIdxvjCH2uj2M.png',
                    'size'          => 'Iuran',
                    'qty'           => 1,
                    'price'         => 100000,
                    'tahun'         => $tahun,
                    'weight'        => 0,
                    'keterangan'    => 'Iuran Anggota IKATWI Tahun ' . $tahun,
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
