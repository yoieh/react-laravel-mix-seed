<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Our custom service provider is going to make sure
     * $ng is a singleton
     */
    public function index()
    {
        // of app.blade.php
        return view('admin');
    }
}
