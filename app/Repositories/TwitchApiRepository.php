<?php namespace App\Repositories;

use Illuminate\Support\Facades\Auth;
use Zarlach\TwitchApi\API\Channels;
use Zarlach\TwitchApi\API\Follow;
use Zarlach\TwitchApi\API\Subscriptions;
use Zarlach\TwitchApi\API\Users;

class TwitchApiRepository
{
    /**
     * @var Follow
     */
    private $follow;

    /**
     * @var Users
     */
    private $users;
    /**
     * @var Subscriptions
     */
    private $subscriptions;
    /**
     * @var Channels
     */
    private $channels;

    public function __construct(
        Follow $follow,
        Users $users,
        Subscriptions $subscriptions,
        Channels $channels
    )
    {
        $this->follow = $follow;
        $this->users = $users;
        $this->subscriptions = $subscriptions;
        $this->channels = $channels;
    }

    public function myChannel() {
        return $this->channels->channel(Auth::user()->channel_id);
    }

    public function updateChannel($options) {
        $channel = Auth::user()->channel_id;
        $token = Auth::user()->access_token;
        return $this->channels->putChannel($channel, $options, $token);
    }

    public function followers($options = [])
    {
        return $this->follow->channelFollows(Auth::user()->channel_id, $options);
    }

    public function subscribers($options = [])
    {
        $token = Auth::user()->access_token;
        return $this->subscriptions->channelsSubscriptions(Auth::user()->channel_id, $options, $token);
    }

    public function liveChannels()
    {
        $token = Auth::user()->access_token;
        return $this->users->liveChannels($token);
    }
}