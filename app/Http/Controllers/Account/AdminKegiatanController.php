<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class AdminKegiatanController extends Controller
{
    public function index()
    {

        $kegiatans = Kegiatan::when(request()->q, function($kegiatans) {
            $kegiatans = $kegiatans->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(5);

         //append query string to pagination links
         $kegiatans->appends(['q' => request()->q]);

        return inertia('Account/Kegiatan/Index', [
            'kegiatans' => $kegiatans
        ]);
    }

    public function Create()
    {

        //return inertia
        return inertia('Account/Kegiatan/Create');
    }

    public function edit(Kegiatan $kegiatan)
    {
        return inertia('Account/Kegiatan/Edit', [
            'kegiatan' => $kegiatan,
        ]);
    }

    public function update(Request $request, Kegiatan $kegiatan)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:kegiatans,name,'.$kegiatan->id,
        ]);

        //check image update
        if ($request->file('image')) {

            //remove old image
            Storage::disk('local')->delete('public/agenda/'.basename($kegiatan->image));
        
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/agenda', $image->hashName());

            //update category with new image
            $kegiatan->update([
                'image'=> $image->hashName(),
                'name' => $request->name,
                'link'          => $request->link,
                'slug'          => Str::slug($request->name, '-')
            ]);

        }

        //update category without image
        $kegiatan->update([
            'name'          => $request->name,
            'link'          => $request->link,
            'slug'          => Str::slug($request->name, '-')
        ]);

        //redirect
        return redirect()->route('account.kegiatan.index');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'image'         => 'required|image|mimes:jpeg,jpg,png|max:2000',
            'name'          => 'required',
            'link'          => 'required',
        ]);

        //upload image
        $image = $request->file('image');
        $image->storeAs('public/agenda', $image->hashName());

        //create category
        Kegiatan::create([
            'image'         => $image->hashName(),
            'name'          => $request->name,
            'link'          => $request->link,
            'slug'          => Str::slug($request->name, '-')
        ]);

        //redirect
        return redirect()->route('account.kegiatan.index');
    }

    public function destroy($id)
    {
        //find by ID
        $kegiatan = Kegiatan::findOrFail($id);

        //remove image
        Storage::disk('local')->delete('public/agenda/'.basename($kegiatan->image));

        //delete
        $kegiatan->delete();

        //redirect
        return redirect()->route('account.kegiatan.index');
    }
}
