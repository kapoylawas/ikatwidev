<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EktaController extends Controller
{
    public function index()
    {
        return inertia('Account/Ekta/Index');
    }
}
