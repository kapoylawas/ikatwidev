<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    public function index()
    {
        //return inertia
        return inertia('Auth/ForgotPassword');
    }
}
