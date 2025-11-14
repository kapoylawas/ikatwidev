<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AdminDpwController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();

        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })
            ->where(function ($query) {
                $query->where('province_id', auth()->user()->province_id) // Yang berasal dari DPW admin
                    ->orWhere('tujuan_mutasi', auth()->user()->province_id); // Yang menuju ke DPW admin
            })
            ->with('province', 'city', 'tujuan', 'tujuanDpc')
            ->latest()
            ->paginate(10);

        return inertia('Account/VerifPengajuanDpw/Index', [
            'verif' => $verif,
            'biodata' => $biodata,
        ]);
    }

    public function edit(Pengajuan $verifPengajuanDpw)
    {

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/VerifPengajuanDpw/Edit', [
            'verifPengajuan' => $verifPengajuanDpw,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }

    public function update(Request $request, Pengajuan $verifPengajuanDpw)
    {
        DB::beginTransaction();

        try {
            $verifPengajuanDpw->update([
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
                'no_urut'       => $request->no_urut,
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

                // FIX: No urut = ID + 00 (misal: ID 5 -> 500, ID 123 -> 12300)
                $newNoUrut = $verifPengajuanDpw->id . '00';

                // Update nomor urut untuk pengajuan yang disetujui
                $verifPengajuanDpw->update(['no_urut' => $newNoUrut]);
            }

            DB::commit();

            return redirect()->route('account.verifPengajuanDpw.index')
                ->with('success', 'Data berhasil diperbarui');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with('error', 'Gagal update: ' . $e->getMessage());
        }
    }
}
