<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class EktaController extends Controller
{
    public function index()
    {
        $biodata = User::where('id', auth()->user()->id)->first();
        
        return inertia('Account/Ekta/Index', [
            'biodata' => $biodata
        ]);
    }
}
