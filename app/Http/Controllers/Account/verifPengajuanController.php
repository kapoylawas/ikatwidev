<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class verifPengajuanController extends Controller
{
    public function index()
    {
        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })->with('province', 'city', 'tujuan', 'tujuanDpc')->latest()->paginate(10);

        return inertia('Account/VerifPengajuan/Index', [
            'verif' => $verif,
        ]);
    }

    public function edit(Pengajuan $verifPengajuan)
    {

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/VerifPengajuan/Edit', [
            'verifPengajuan' => $verifPengajuan,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }

    public function show(Pengajuan $id)
    {
        $pengajuan = Pengajuan::findOrFail($id); // Adjust model name as needed

        return Inertia('Account/VerifPengajuan/Show', [
            'pengajuan' => $pengajuan
        ]);
    }

    public function update(Request $request, Pengajuan $verifPengajuan)
    {
        DB::beginTransaction();

        try {
            // 1. Update tabel pengajuan
            $verifPengajuan->update([
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
            ]);

            // 2. Update tabel users
            $user = User::where('id', $request->user_id)->first();

            if (!$user) {
                throw new \Exception("User dengan ID {$request->user_id} tidak ditemukan");
            }

            // Jika tujuan_mutasi dan dpc_mutasi ada di request, update user
            if ($request->filled('tujuan_mutasi') && $request->filled('dpc_mutasi')) {
                $user->province_id = $request->tujuan_mutasi; // atau logika mapping yang sesuai
                $user->city_id = $request->dpc_mutasi; // atau logika mapping yang sesuai
            } else {
                // Fallback ke nilai sebelumnya jika tidak diisi
                $user->province_id = $request->province_id;
                $user->city_id = $request->city_id;
            }

            $user->save();

            DB::commit();

            return redirect()->route('account.verifPengajuan.index')
                ->with('success', 'Data berhasil diperbarui');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with('error', 'Gagal update: ' . $e->getMessage());
        }
    }
}
