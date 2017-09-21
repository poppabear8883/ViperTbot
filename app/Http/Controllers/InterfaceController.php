<?php namespace App\Http\Controllers;

use App\IGDB\IGDB;
use App\Repositories\TwitchApiRepository;

class InterfaceController extends Controller
{
    /**
     * @var TwitchApiRepository
     */
    private $twitch;

    /**
     * @var IGDB
     */
    private $igdb;

    public function __construct(TwitchApiRepository $twitch, IGDB $igdb)
    {
        $this->twitch = $twitch;
        $this->igdb = $igdb;
    }

    public function index()
    {
        //dd($this->igdb->getGames());
        //dd(config('services.igdb.key'));
        return view('pages.interface.index', [
            'followers' => $this->twitch->followers(),
            'subscribers' => $this->twitch->subscribers(),
            'live_channels' => $this->twitch->liveChannels()
        ]);
    }
}