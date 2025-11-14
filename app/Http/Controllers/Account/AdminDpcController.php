<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AdminDpcController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();

        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })
            ->where(function ($query) {
                $query->where('city_id', auth()->user()->city_id) // Yang berasal dari DPC admin
                    ->orWhere('dpc_mutasi', auth()->user()->city_id); // Yang menuju ke DPC admin
            })
            ->with('province', 'city', 'tujuan', 'tujuanDpc')
            ->latest()
            ->paginate(10);

        return inertia('Account/VerifPengajuanDpc/Index', [
            'verif' => $verif,
            'biodata' => $biodata,
        ]);
    }

    public function edit(Pengajuan $verifPengajuanDpc)
    {

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/VerifPengajuanDpc/Edit', [
            'verifPengajuan' => $verifPengajuanDpc,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }


    public function show(Pengajuan $id)
    {
        $pengajuan = Pengajuan::findOrFail($id); // Adjust model name as needed

        return Inertia('Account/verifPengajuanDpc/Show', [
            'pengajuan' => $pengajuan
        ]);
    }

    public function update(Request $request, Pengajuan $verifPengajuanDpc)
    {
        DB::beginTransaction();

        try {
            // 1. Update tabel pengajuan
            $verifPengajuanDpc->update([
                'user_id'       => $request->user_id,
                'name'          => $request->name,
                'kta'           => $request->kta,
                'province_id'   => $request->province_id,
                'city_id'       => $request->city_id,
                'tgl_mutasi'    => $request->tgl_mutasi,
                'keterangan'    => $request->keterangan,
                'tujuan_mutasi' => $request->tujuan_mutasi,
                'dpc_mutasi'    => $request->dpc_mutasi,
                'status'        => $request->status,
                'no_urut'        => $request->no_urut,
                'keterangan_revisi' => $request->keterangan_revisi,
            ]);

            // 2. Update tabel users HANYA JIKA status disetujui
            if ($request->status === 'selesai') {
                $user = User::where('id', $request->user_id)->first();

                if (!$user) {
                    throw new \Exception("User dengan ID {$request->user_id} tidak ditemukan");
                }

                // Jika tujuan_mutasi dan dpc_mutasi ada di request, update user
                if ($request->filled('tujuan_mutasi') && $request->filled('dpc_mutasi')) {
                    $user->province_id = $request->tujuan_mutasi;
                    $user->city_id = $request->dpc_mutasi;
                } else {
                    // Fallback ke nilai sebelumnya jika tidak diisi
                    $user->province_id = $request->province_id;
                    $user->city_id = $request->city_id;
                }

                $user->save();

                // Dapatkan tahun dari tgl_mutasi atau tahun sekarang
                $tahunPengajuan = date('Y', strtotime($request->tgl_mutasi ?? now()));

                // Cari pengajuan terakhir yang disetujui PADA TAHUN YANG SAMA
                $lastPengajuan = Pengajuan::where('status', 'selesai')
                    ->whereYear('tgl_mutasi', $tahunPengajuan)
                    ->orderBy('no_urut', 'desc')
                    ->first();

                $newNoUrut = '001'; // Default untuk tahun baru atau pertama kali
                if ($lastPengajuan && $lastPengajuan->no_urut) {
                    $lastNumber = (int)$lastPengajuan->no_urut;
                    $newNumber = $lastNumber + 1;
                    $newNoUrut = str_pad($newNumber, 3, '0', STR_PAD_LEFT);
                }

                // Update nomor urut untuk pengajuan yang disetujui
                $verifPengajuanDpc->update(['no_urut' => $newNoUrut]);
            }

            DB::commit();

            return redirect()->route('account.verifPengajuanDpc.index')
                ->with('success', 'Data berhasil diperbarui');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with('error', 'Gagal update: ' . $e->getMessage());
        }
    }
}
