<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Pengajuan;
use App\Models\Province;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


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

        $searchString = request()->q;

        $pengajuans = Pengajuan::whereHas('user', function ($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        })
        ->with(['user' => function($query) use ($searchString){
            $query->where('name', 'like', '%'.$searchString.'%');
        }])->where('user_id', auth()->user()->id)->latest()->paginate(10);

        $pengajuans->appends(['q' => request()->q]);


        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('cek_ts', 1)
            ->where('tahun', $tahun)->get();
        $statusAnggota = User::where('id', auth()->user()->id)->first();
        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();
        
            
        return inertia('Account/Pengajuan/Index', [
            'transactions' => $transactions,
            'statusAnggota' => $statusAnggota,
            'biodata' => $biodata,
            'pengajuans' => $pengajuans
        ]);
    }

    public function create()
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
            
        return inertia('Account/Pengajuan/Create', [
            'transactions' => $transactions,
            'statusAnggota' => $statusAnggota,
            'biodata' => $biodata,
            'provinces' => $provinces,
            'cities' => $cities,
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
            'status'      => 'belum',
        ]);

        //return back
        return redirect()->route('account.pengajuan.index');
    }

    public function edit(Pengajuan $pengajuan)
    {
        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/Pengajuan/Edit', [
            'pengajuan' => $pengajuan,
            'provinces' => $provinces,
            'cities' => $cities,
        ]);
    }

    public function update(Request $request, Pengajuan $pengajuan)
    {
       
        //check image update
        if ($request->file('document')) {

            //remove old image
            Storage::disk('local')->delete('public/document/'.basename($pengajuan->document));
        
            //upload new image
            $document = $request->file('document');
            $document->storeAs('public/document', $document->hashName());

            //update category with new image
            $pengajuan->update([
                'document'=> $document->hashName(),
                'user_id'     => $request->user_id,
                'name'      => $request->name,
                'kta'      => $request->kta,
                'province_id'      => $request->province_id,
                'city_id'      => $request->city_id,
                'tgl_mutasi'      => $request->tgl_mutasi,
                'keterangan'      => $request->keterangan,
                'tujuan_mutasi'      => $request->tujuan_mutasi,
            ]);

        }

        //update without image
        $pengajuan->update([
            'user_id'     => $request->user_id,
            'name'      => $request->name,
            'kta'      => $request->kta,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            'tgl_mutasi'      => $request->tgl_mutasi,
            'keterangan'      => $request->keterangan,
            'tujuan_mutasi'      => $request->tujuan_mutasi,
        ]);

        //redirect
        return redirect()->route('account.pengajuan.index');
    }

    public function destroy($id)
    {
        //find by ID
        $pengajuan = Pengajuan::findOrFail($id);

        //remove image
        Storage::disk('local')->delete('public/document/'.basename($pengajuan->document));

        //delete
        $pengajuan->delete();

        //redirect
        return redirect()->route('account.pengajuan.index');
    }

}
