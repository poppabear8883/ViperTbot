<?php

namespace App\Users\Repositories;

use App\Twitch\TwitchApi;
use App\Users\Contracts\UsersInterface;
use App\Users\User;
use Illuminate\Support\Facades\Auth;

class UsersRepository implements UsersInterface
{

    /**
     * @var User
     */
    private $model;

    /**
     * @var TwitchApi
     */
    private $twitch;

    /**
     * UsersRepository constructor.
     * @param User $model
     */
    public function __construct(User $model, TwitchApi $twitch)
    {
        $this->model = $model;
        $this->twitch = $twitch;
    }

    /**
     * @return array
     */
    public function data()
    {
        return [
            'account' => $this->account(),
            'channel' => $this->channel(),
            'playlists' => $this->playlists(),
            'reqsongs' => $this->requestedSongs(),
            'regulars' => $this->regulars(),
            'songs' => $this->songs()
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {
        return $this->model->all();
    }

    /**
     * @param $userData
     * @return mixed
     */
    public function findByUsernameOrCreate($userData)
    {
        $user = $this->model->where('channel_id', $userData->id)->first();

        if(!$user)
            return $this->model->create([
                'username' => $userData->name,
                'channel_id' => $userData->id,
                'display_name' => $userData->nickname,
                'email' => $userData->email,
                'avatar' => $userData->avatar,
                'access_token' => $userData->token
            ]);

        return $user;
    }

    /**
     * @return mixed
     */
    public function channel()
    {
        return $this->twitch->authChannel($this->token());
    }

    /**
     * @return mixed
     */
    public function playlists()
    {
        return Auth::user()->playlists()->with('songs')->get();
    }

    /**
     * @return mixed
     */
    public function requestedSongs()
    {
        return Auth::user()->requestedSongs;
    }

    /**
     * @return mixed
     */
    public function regulars()
    {
        return Auth::user()->regulars;
    }

    /**
     * @return mixed
     */
    public function songs()
    {
        return Auth::user()->songs;
    }

    /**
     * @return mixed
     */
    public function account()
    {
        return Auth::user()->first();
    }

    /**
     * @return mixed
     */
    protected function token()
    {
        return Auth::user()->access_token;
    }

    /**
     * @return mixed
     */
    protected function channel_id()
    {
        return Auth::user()->channel_id;
    }
}