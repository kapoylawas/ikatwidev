<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    public function index()
    {

        $tahun = date('Y');
        $transactions = Transaction::with('user')
            ->where('user_id', auth()->user()->id)
            ->where('grand_total', 50000)
            ->where('tahun', $tahun)->get();

        $users = User::when(request()->q, function ($users) {
            $users = $users->where('name', 'like', '%' . request()->q . '%');
        })->with('roles', 'province', 'city')->where('id', auth()->user()->id)
            // ->orWhere('province_id', auth()->user()->province_id)
            ->latest()->paginate(5);

        //append query string to pagination links
        $users->appends(['q' => request()->q]);

        return inertia('Account/Documents/Index', [
            'users' => $users,
            'transactions' => $transactions
        ]);
    }

    public function edit($id)
    {
        //get user
        $document = User::findOrFail($id);

        $provinces = Province::all();
        $cities = City::all();

        return inertia('Account/Documents/Edit', [
            'provinces' => $provinces,
            'cities' => $cities,
            'document' => $document,
            
        ]);
    }

    public function update(Request $request, User $document)
    {
        $this->validate(
            $request,
            [
                'email'    => 'required|unique:users,email,' . $document->id,
                // 'ijazah'     => 'mimes:pdf|max:4000',
                // 'str'     => 'mimes:pdf|max:4000',
            ]
        );

        if ($request->file('ijazah')) {
            //remove old ijazah
            Storage::disk('local')->delete('public/ijazah/' . basename($document->ijazah));

            // upload new image
            $ijazah = $request->file('ijazah');
            $ijazah->storeAs('public/ijazah', $ijazah->hashName());
            
            $document->update([
                'name'      => $request->name,
                'email'      => $request->email,
                'ijazah' => $ijazah->hashName(),
            ]);
        } 

        if ($request->file('str')) {
            //remove old ijazah
            Storage::disk('local')->delete('public/str/' . basename($document->str));

            // upload new image
            $str = $request->file('str');
            $str->storeAs('public/str', $str->hashName());
            
            $document->update([
                'name'      => $request->name,
                'email'      => $request->email,
                'str' => $str->hashName(),
            ]);
        } 

        if ($request->file('sip')) {
            //remove old sip
            Storage::disk('local')->delete('public/sip/' . basename($document->sip));

            // upload new image
            $sip = $request->file('sip');
            $sip->storeAs('public/sip', $sip->hashName());
            
            $document->update([
                'name'      => $request->name,
                'email'      => $request->email,
                'sip' => $sip->hashName(),
            ]);
        } 

        $document->update([
            'name'      => $request->name,
            'email'     => $request->email,
            'province_id'      => $request->province_id,
            'city_id'      => $request->city_id,
            'date_exprd'     => $request->date_exprd,
        ]);
        

        return redirect()->route('account.documents.index');
    }
}
