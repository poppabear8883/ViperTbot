<?php namespace App\Authentication;

use App\Authentication\Contracts\AuthenticateUserInterface;
use App\Playlists\Contracts\PlaylistsInterface;
use App\Users\Contracts\UsersInterface;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\Factory as Socialite;
use Zarlach\TwitchApi\Facades\TwitchApiServiceFacade as TwitchApi;

class AuthenticateUser
{

    /**
     * @var UsersInterface
     */
    private $user;

    /**
     * @var Socialite
     */
    private $socialite;

    /**
     * @var PlaylistsInterface
     */
    private $playlist;


    public function __construct(UsersInterface $user, Socialite $socialite, PlaylistsInterface $playlist)
    {
        $this->user = $user;
        $this->socialite = $socialite;
        $this->playlist = $playlist;
    }

    public function execute(bool $hasCode, AuthenticateUserInterface $listener)
    {

        if (!$hasCode) return $this->getAuthorizationFirst();

        //dd($this->getTwitchUser());

        $user = $this->user->findByUsernameOrCreate($this->getTwitchUser());

        Auth::login($user, true);

        if (!$this->playlist->existsById(1)) {
            $this->playlist->create('Default Playlist', $user->id);
        }

        TwitchApi::setToken($user->access_token);

        return $listener->userHasLoggedIn();
    }

    /**
     * @return mixed
     */
    public function getAuthorizationFirst()
    {
        return $this->socialite->driver('twitch')
            ->scopes(config('twitch-api.scopes'))
            ->redirect();
    }

    /**
     * @return \Laravel\Socialite\Contracts\User
     */
    public function getTwitchUser()
    {
        return $this->socialite->driver('twitch')->user();
    }

    public function getTwitchUserToken()
    {
        return $this->socialite->driver('twitch')->user()->token;
    }
}