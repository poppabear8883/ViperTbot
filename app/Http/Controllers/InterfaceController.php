<?php namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class InterfaceController extends Controller
{

    public function index()
    {
        return view('pages.interface.index', [
            'username' => Auth::user()->username
        ]);
    }
}