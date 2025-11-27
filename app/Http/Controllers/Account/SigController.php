<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Sig;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class SigController extends Controller
{
  public function index()
    {

        $searchString = request()->q;

        $pengajuans = Sig::whereHas('user', function ($query) use ($searchString) {
            $query->where('name', 'like', '%' . $searchString . '%');
        })
            ->with(['user' => function ($query) use ($searchString) {
                $query->where('name', 'like', '%' . $searchString . '%');
            }])->where('user_id', auth()->user()->id)->latest()->paginate(10);

        $pengajuans->appends(['q' => request()->q]);


        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where('tahun', $tahun)->get();
        $statusAnggota = User::where('id', auth()->user()->id)->first();
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();


        return inertia('Account/Sig/Index', [
            'transactions' => $transactions,
            'statusAnggota' => $statusAnggota,
            'biodata' => $biodata,
            'pengajuans' => $pengajuans
        ]);
    }
}
