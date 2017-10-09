<?php namespace App\Http\Controllers;

use App\Playlists\Song;

class PagesController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function dashboard()
    {
        //dd(Song::where('playlist_id', 1)->where('video_id', '_IhhtEX9WvA')->delete());
        return view('pages.interface.index');
    }

    public function applications()
    {
        return view('pages.interface.applications');
    }
}