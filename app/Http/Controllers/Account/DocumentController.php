<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Province;
use App\Models\SuratStr;
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

        $biodata = User::where('id', auth()->user()->id)->with('province', 'city')->first();

        return inertia('Account/Documents/Index', [
            'transactions' => $transactions,
            'biodata' => $biodata,
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

    public function showStr($id)
    {
        //get product by ID
        $users = User::findOrFail($id);

        //get relation str with pagination
        $users->setRelation('suratStrs', $users->suratStrs()->paginate(5));

        //return
        return inertia('Account/Documents/Showstr', [
            'users'   => $users,
        ]);
    }

    public function createStr($id)
    {
        // //get product by ID
        $users = User::findOrFail($id);

        // //get relation str with pagination
        $users->setRelation('suratStrs', $users->suratStrs()->paginate(5));

        //return
        return inertia('Account/Documents/Createstr', [
            'users' => $users
        ]);
    }

    public function storeStr(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'image'      => 'required|mimes:pdf',
            'no_str'      => 'required',
            'date_str'      => 'required',
            'date_start'      => 'required',
            'date_end'      => 'required',
        ]);

        //get user by ID
        $user = User::findOrFail($request->user_id);

        //upload image
        $image = $request->file('image');
        $image->storeAs('public/str', $image->hashName());

         //insert database
         $user->suratStrs()->create([
            'image'     => $image->hashName(),
            'no_str'     => $request->no_str,
            'date_str'     => $request->date_str,
            'date_start'     => $request->date_start,
            'date_end'     => $request->date_end,
            'user_id'     => $user,
        ]);

        //return back
        return redirect()->route('account.documents.index');
    }

    public function hapus($id)
    {
        //find product image by ID
        $str_image = SuratStr::findOrFail($id);
        // dd($str_image);

        // //remove image from server
        Storage::disk('local')->delete('public/str/'.basename($str_image->image));

        //delete image
        $str_image->delete();

        //redirect
        return redirect()->back();
    }

    public function showSip($id)
    {
        //get product by ID
        $users = User::findOrFail($id);

        //get relation str with pagination
        $users->setRelation('suratSip', $users->suratSip()->paginate(5));

        //return
        return inertia('Account/Documents/Showsip', [
            'users'   => $users,
        ]);
    }
}
