<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Sig;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Inertia\Inertia;

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

    public function verifyQRCode(Request $request)
    { 
        try {
            // Ambil parameter dari QR Code
            $memberId = $request->query('mid');
            $year = $request->query('y');
            $timestamp = $request->query('t');
            
            // Validasi parameter
            if (empty($memberId) || empty($year)) {
                return Inertia::render('Web/VerifyResultSig', [
                    'success' => false,
                    'message' => 'QR Code tidak valid. Parameter tidak lengkap.',
                    'data' => null,
                    'scanDate' => now()->format('d-m-Y H:i:s'),
                    'errorCode' => 'INVALID_PARAMS'
                ]);
            }
            
            // Cari user berdasarkan no_anggota
            $user = User::where('no_anggota', $memberId)->first();
            
            if (!$user) {
                return Inertia::render('Web/VerifyResultSig', [
                    'success' => false,
                    'message' => 'Anggota tidak ditemukan.',
                    'data' => [
                        'member_id' => $memberId,
                        'year' => $year
                    ],
                    'scanDate' => now()->format('d-m-Y H:i:s'),
                    'errorCode' => 'MEMBER_NOT_FOUND'
                ]);
            }
            
            // Cari data SIG untuk tahun tersebut
            $sig = Sig::where('user_id', $user->id)
                     ->where('tahun', $year)
                     ->first();
            
            if (!$sig) {
                return Inertia::render('Web/VerifyResultSig', [
                    'success' => false,
                    'message' => 'Data SIG tidak ditemukan untuk tahun ' . $year,
                    'data' => [
                        'member_id' => $memberId,
                        'member_name' => $user->name,
                        'year' => $year,
                        'member_exists' => true
                    ],
                    'scanDate' => now()->format('d-m-Y H:i:s'),
                    'errorCode' => 'SIG_NOT_FOUND'
                ]);
            }
            
            // Check status
            if ($sig->status !== 'approved') {
                $statusMessage = match($sig->status) {
                    'pending' => 'Status: Menunggu verifikasi',
                    'rejected' => 'Status: Ditolak',
                    default => 'Status: Tidak aktif'
                };
                
                return Inertia::render('Web/VerifyResultSig', [
                    'success' => false,
                    'message' => 'Kartu SIG tidak aktif. ' . $statusMessage,
                    'data' => [
                        'member_id' => $memberId,
                        'member_name' => $user->name,
                        'year' => $year,
                        'status' => $sig->status,
                        'status_label' => $this->getStatusLabel($sig->status),
                        'registered_date' => $sig->created_at->format('d-m-Y'),
                        'member_exists' => true,
                        'sig_exists' => true
                    ],
                    'scanDate' => now()->format('d-m-Y H:i:s'),
                    'errorCode' => 'INACTIVE_CARD'
                ]);
            }
            
            // Check masa berlaku (sampai 31 Desember tahun tersebut)
            $expiryDate = Carbon::create($year, 12, 31, 23, 59, 59);
            $isExpired = Carbon::now()->gt($expiryDate);
            
            if ($isExpired) {
                return Inertia::render('Web/VerifyResultSig', [
                    'success' => false,
                    'message' => 'Kartu SIG sudah kadaluarsa. Masa berlaku: 31 Desember ' . $year,
                    'data' => [
                        'member_id' => $memberId,
                        'member_name' => $user->name,
                        'year' => $year,
                        'status' => $sig->status,
                        'status_label' => $this->getStatusLabel($sig->status),
                        'registered_date' => $sig->created_at->format('d-m-Y'),
                        'expired' => true,
                        'expiry_date' => $expiryDate->format('d-m-Y'),
                        'member_exists' => true,
                        'sig_exists' => true,
                        'was_approved' => true
                    ],
                    'scanDate' => now()->format('d-m-Y H:i:s'),
                    'errorCode' => 'CARD_EXPIRED'
                ]);
            }
            
            // Jika semua valid, tampilkan data lengkap
            return Inertia::render('Web/VerifyResultSig', [
                'success' => true,
                'message' => 'Kartu SIG Valid',
                'data' => [
                    'member_id' => $memberId,
                    'member_name' => $user->name,
                    'year' => $year,
                    'status' => $sig->status,
                    'status_label' => $this->getStatusLabel($sig->status),
                    'registered_date' => $sig->created_at->format('d-m-Y'),
                    'expiry_date' => $expiryDate->format('d-m-Y'),
                    'valid' => true,
                    'is_active' => true,
                    'qr_generated' => $timestamp ? Carbon::createFromTimestampMs($timestamp)->format('d-m-Y H:i') : null,
                    'days_remaining' => Carbon::now()->diffInDays($expiryDate, false),
                    'member_exists' => true,
                    'sig_exists' => true
                ],
                'scanDate' => now()->format('d-m-Y H:i:s'),
                'qrTimestamp' => $timestamp
            ]);
            
        } catch (\Exception $e) {
            return Inertia::render('Web/VerifyResultSig', [
                'success' => false,
                'message' => 'Terjadi kesalahan sistem: ' . $e->getMessage(),
                'data' => null,
                'scanDate' => now()->format('d-m-Y H:i:s'),
                'errorCode' => 'SERVER_ERROR'
            ]);
        }
    }

    private function getStatusLabel($status)
    {
        return match($status) {
            'pending' => 'Menunggu Verifikasi',
            'approved' => 'Disetujui',
            'rejected' => 'Ditolak',
            default => 'Tidak Diketahui'
        };
    }
}