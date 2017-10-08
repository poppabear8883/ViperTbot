<?php namespace App\Http\Controllers;

class PagesController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function dashboard()
    {
        return view('pages.interface.index');
    }

    public function applications()
    {
        return view('pages.interface.applications');
    }
}