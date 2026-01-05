<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {
         $videos = Video::when(request()->q, function($videos) {
            $videos = $videos->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(10);

        $videos->appends(['q' => request()->q]);

        return inertia('Account/Videos/Index', [
            'videos' => $videos
        ]);
    }

}
