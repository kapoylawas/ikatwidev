<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Sig;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class SigController extends Controller
{
    public function index()
    {
        $currentYear = date('Y');
        
        // Cek apakah user sudah memiliki SIG untuk tahun INI
        $sig = Sig::where('user_id', auth()->user()->id)
            ->where('tahun', $currentYear) // FILTER BY CURRENT YEAR
            ->first();

        // Debug lebih detail
        Log::info('SIG Debug Current Year:', [
            'user_id' => auth()->user()->id,
            'current_year' => $currentYear,
            'sig_found' => !is_null($sig),
            'sig_details' => $sig ? [
                'id' => $sig->id,
                'tahun' => $sig->tahun,
                'status' => $sig->status,
                'match_current_year' => $sig->tahun == $currentYear,
            ] : null,
        ]);

        // Ambil semua data SIG untuk riwayat
        $allSigs = Sig::where('user_id', auth()->user()->id)
            ->orderBy('tahun', 'desc')
            ->get();

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
            'pengajuans' => $pengajuans,
            'sig' => $sig, // SIG untuk tahun INI
            'allSigs' => $allSigs, // Semua riwayat SIG
            'user' => auth()->user(),
        ]);
    }

    public function store(Request $request)
    {
        $currentYear = date('Y');
        
        // Validasi input - hanya tahun berjalan
        $validator = Validator::make($request->all(), [
            'tahun' => 'required|integer|in:' . $currentYear,
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        try {
            // Cek apakah pengguna sudah memiliki SIG pada tahun ini
            $existingSig = Sig::where('user_id', auth()->id())
                ->where('tahun', $currentYear)
                ->first();

            if ($existingSig) {
                return redirect()->back()
                    ->with('error', 'Anda sudah terdaftar untuk SIG ' . $currentYear);
            }

            // Buat data SIG baru
            $sig = Sig::create([
                'user_id' => auth()->id(),
                'status' => 'approved',
                'tahun' => $currentYear,
            ]);

            return redirect()->route('account.sig.index')
                ->with('success', 'Pendaftaran SIG ' . $currentYear . ' berhasil disimpan!');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }
}