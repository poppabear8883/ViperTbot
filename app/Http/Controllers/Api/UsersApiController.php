<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\HandlesApiRequests;
use App\Twitch\TwitchApi;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UsersApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [

    ];

    /**
     * The TwitchApi instance
     *
     * @var TwitchApi
     */
    private $twitch;

    /**
     * Injects User dependency.
     *
     * @param User $user
     */
    public function __construct(TwitchApi $twitch)
    {
        $this->twitch = $twitch;
    }

    /**
     * Gets the currently authorized User Object
     *
     * @return Response
     */
    protected function getAuthUser()
    {
        return response([
            'account' => Auth::user()->first(),
            'channel' => $this->twitch->authChannel($this->token()),
            'playlists' => Auth::user()->playlists()->with('songs')->get(),
            'reqsongs' => Auth::user()->requestedSongs,
            'regulars' => Auth::user()->regulars,
            'songs' => Auth::user()->songs
        ], 200);
    }


}