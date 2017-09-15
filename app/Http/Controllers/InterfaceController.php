<?php namespace App\Http\Controllers;

use App\Repositories\TwitchApiRepository;

class InterfaceController extends Controller
{
    /**
     * @var TwitchApiRepository
     */
    private $twitch;

    public function __construct(TwitchApiRepository $twitch)
    {
        $this->twitch = $twitch;
    }

    public function index()
    {
        //dd(\Auth::user()->playlists);
        return view('pages.interface.index', [
            'followers' => $this->twitch->followers(),
            'subscribers' => $this->twitch->subscribers()
        ]);
    }
}