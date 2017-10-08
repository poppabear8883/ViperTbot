<?php

namespace App\Twitch;

use Zarlach\TwitchApi\API\Users;
use Zarlach\TwitchApi\Services\TwitchApiService;

class TwitchApi extends TwitchApiService
{
    public function liveChannels($token)
    {
        $users = new Users();
        return $users->liveChannels($token);
    }


}