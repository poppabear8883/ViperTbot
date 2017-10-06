<?php namespace App\Http\Controllers;

class InterfaceController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('pages.interface.index');
    }
}