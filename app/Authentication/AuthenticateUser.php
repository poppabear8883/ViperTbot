<?php namespace App\Authentication;

use App\Contracts\AuthenticateUserListener;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\Factory as Socialite;

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

        $user = $this->user->findByUsernameOrCreate($this->getTwitchUser());

        Auth::login($user, true);

        return $listener->userHasLoggedIn();
    }

    /**
     * @return mixed
     */
    public function getAuthorizationFirst()
    {
        return $this->socialite->driver('twitch')->redirect();
    }

    /**
     * @return \Laravel\Socialite\Contracts\User
     */
    public function getTwitchUser()
    {
        return $this->socialite->driver('twitch')->user();
    }
}