<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::when(request()->q, function ($videos) {
            $videos = $videos->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(10);

        $videos->appends(['q' => request()->q]);

        return inertia('Account/Videos/Index', [
            'videos' => $videos
        ]);
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:videos',
            'status'        => 'required|in:draft,published,archived',
            'tahun'         => 'required|integer|min:1900|max:' . date('Y'),
            'linkvideo'     => 'required|url|starts_with:https://www.youtube.com,https://youtu.be',
        ], [
            'linkvideo.required'     => 'Link video YouTube wajib diisi',
            'linkvideo.url'          => 'Format link video YouTube tidak valid',
            'linkvideo.starts_with'  => 'Link harus dari YouTube (youtube.com atau youtu.be)',
        ]);

        // Membuat record video
        Video::create([
            'name'          => $request->name,
            'status'        => $request->status,
            'tahun'         => $request->tahun,
            'linkvideo'     => $request->linkvideo,
        ]);

        // Redirect
        return redirect()->route('account.videos.index')->with([
            'success' => 'Video berhasil ditambahkan!'
        ]);
    }

    public function destroy($id)
    {
        try {
            $video = Video::findOrFail($id);
            $video->delete();

            return redirect()->route('account.videos.index')->with([
                'success' => 'Video berhasil dihapus!'
            ]);
        } catch (\Exception $e) {
            return redirect()->route('account.videos.index')->with([
                'error' => 'Gagal menghapus video: ' . $e->getMessage()
            ]);
        }
    }
}
