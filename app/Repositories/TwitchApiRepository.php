<?php namespace App\Repositories;

use Illuminate\Support\Facades\Auth;
use TwitchApi;

class TwitchApiRepository
{

    public function followers($options = [])
    {
        return TwitchApi::followers(Auth::user()->channel_id, $options);
    }

    public function subscribers($options = [])
    {
        $token = Auth::user()->access_token;
        return TwitchApi::subscribers(Auth::user()->channel_id, $options, $token);
    }
}