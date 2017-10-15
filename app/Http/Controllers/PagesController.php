<?php namespace App\Http\Controllers;

use Illuminate\Auth\AuthManager;

class PagesController extends Controller
{

    /**
     * @var AuthManager
     */
    private $auth;

    public function __construct(AuthManager $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function dashboard()
    {
        return view('pages.interface.index', [
            'playlists' => $this->getPlaylistsWithSongs()
        ]);
    }

    public function playlists()
    {
        return view('pages.interface.playlists', [
            'playlists' => $this->getPlaylistsWithSongs()
        ]);
    }

    public function applications()
    {
        return view('pages.interface.applications');
    }

    /**
     * @return mixed
     */
    private function getPlaylistsWithSongs()
    {
        return $this->auth->user()->playlists()->with('songs')->get();
    }
}