<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class PengajuanPrintController extends Controller
{
    public function index()
    {

        $biodata = User::where('id', auth()->user()->id)
            ->with(['province', 'city', 'pengajuan' => function ($query) {
                $query->with([
                    'province',
                    'city',
                    'tujuan',
                    'tujuanDpc',
                ]);
            }])
            ->first();
        //return inertia
        return inertia('Account/PengajuanPrint/Index', [
            'biodata' => $biodata,
        ]);
    }
}
