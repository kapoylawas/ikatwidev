<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class PengajuanController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where('tahun', $tahun)->get();
        $statusAnggota = User::where('id', auth()->user()->id)->first();
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();
        $provinces = Province::all();
        $cities = City::all();
            
        return inertia('Account/Pengajuan/Index', [
            'transactions' => $transactions,
            'statusAnggota' => $statusAnggota,
            'biodata' => $biodata,
            'provinces' => $provinces,
            'cities' => $cities
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        /**
         * Validate request
         */
        $this->validate($request, [
            'tgl_mutasi'      => 'required',
            'keterangan'      => 'required',
            'tujuan_mutasi'      => 'required',
            // 'document'      => 'required|mimes:pdf',
        ]);

        //get user by ID
        // $user = User::findOrFail($request->user_id);

        //upload document
        $document = $request->file('document');
        $document->storeAs('public/document', $document->hashName());

         //insert database
        Pengajuan::create([
            'user_id'     => $request->user_id,
            'name'      => $request->name,
            'kta'      => $request->kta,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            'document'         => $document->hashName(),
            'tgl_mutasi'      => $request->tgl_mutasi,
            'keterangan'      => $request->keterangan,
            'tujuan_mutasi'      => $request->tujuan_mutasi,
        ]);

        //return back
        return redirect()->route('account.pengajuan.index');
    }

}
