<?php namespace App\Authentication;

use App\Contracts\AuthenticateUserListener;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\Factory as Socialite;
use Zarlach\TwitchApi\Facades\TwitchApiServiceFacade as TwitchApi;

class AuthenticateUser
{

    /**
     * @var UserRepository
     */
    private $user;

    /**
     * @var Socialite
     */
    private $socialite;


    public function __construct(UserRepository $user, Socialite $socialite)
    {
        $this->user = $user;
        $this->socialite = $socialite;
    }

    public function execute(bool $hasCode, AuthenticateUserListener $listener)
    {

        if (!$hasCode) return $this->getAuthorizationFirst();

        //dd($this->getTwitchUser());

        $user = $this->user->findByUsernameOrCreate($this->getTwitchUser());

        Auth::login($user, true);

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