<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class verifPengajuanController extends Controller
{
    public function index()
    {
        $verif = Pengajuan::when(request()->q, function ($verif) {
            $verif = $verif->where('name', 'like', '%' . request()->q . '%');
        })->with('province', 'city', 'tujuan')->latest()->paginate(10);

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

    public function update(Request $request, Pengajuan $verifPengajuan)
    {
       
        //check image update
        if ($request->file('document')) {

            //remove old image
            Storage::disk('local')->delete('public/document/'.basename($verifPengajuan->document));
        
            //upload new image
            $document = $request->file('document');
            $document->storeAs('public/document', $document->hashName());

            //update category with new image
            $verifPengajuan->update([
                'document'=> $document->hashName(),
                'user_id'     => $request->user_id,
                'name'      => $request->name,
                'kta'      => $request->kta,
                'province_id'      => $request->province_id,
                'city_id'      => $request->city_id,
                'tgl_mutasi'      => $request->tgl_mutasi,
                'keterangan'      => $request->keterangan,
                'tujuan_mutasi'      => $request->tujuan_mutasi,
                'status'      => $request->status,
            ]);

        }

        //update without image
        $verifPengajuan->update([
            'user_id'     => $request->user_id,
            'name'      => $request->name,
            'kta'      => $request->kta,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            'tgl_mutasi'      => $request->tgl_mutasi,
            'keterangan'      => $request->keterangan,
            'tujuan_mutasi'      => $request->tujuan_mutasi,
            'status'      => $request->status,
        ]);

        //redirect
        return redirect()->route('account.verifPengajuan.index');
    }
}
