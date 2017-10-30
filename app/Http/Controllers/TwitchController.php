<?php

namespace App\Http\Controllers;

use App\Twitch\TwitchApi;
use Illuminate\Http\Request;

/**
 * Class TwitchController
 * @package App\Http\Controllers\Api
 */
class TwitchController extends Controller
{

    /**
     * @var TwitchApi
     */
    private $twitch;


    /**
     * TwitchController constructor.
     * @param TwitchApi $twitch
     */
    public function __construct(TwitchApi $twitch)
    {
        $this->twitch = $twitch;
    }

    /**
     * Followed streams who are live.
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function liveChannels()
    {
        return response($this->twitch->liveChannels($this->token()), 200);
    }

    public function channel(Request $request)
    {
        $request->validate([
            'channel_id' => 'required'
        ]);

        return response($this->twitch->channel($request->input('channel_id')), 200);
    }

    public function followers(Request $request)
    {
        $channel = $this->channel_id();

        if ($request->has('channel_id')) {
            $channel = $request->input('channel_id');
        }

        $response = $this->twitch->followers($channel, []);
        return response($response, 200);
    }

    public function following()
    {
        $following = $this->twitch->followings($this->channel_id(), []);
        return response([
            'total' => $following['_total'],
            'streams' => $following['follows'],
            'online' => $this->twitch->liveChannels($this->token())
        ], 200);
    }

    public function isFollowing(Request $request)
    {
        $request->validate([
            'channel_id' => 'required',
            'following_id' => 'required'
        ]);

        $channel_id = $request->input('channel_id');
        $following_id = $request->input('following_id');

        $response = $this->twitch->userIsFollowing($channel_id, $following_id);

        if (isset($response->error))
            return response($response->status, 200);

        return response($response, 200);
    }


    /**
     * Get authenticated channel object.
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function authChannel()
    {
        return response($this->twitch->authChannel($this->token()), 200);
    }


    /**
     * Update channel.
     *
     * @param array $params
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function updateChannel(Request $request)
    {
        $this->twitch->updateChannel($this->channel_id(), $request->all(), $this->token());
        return response($this->twitch->authChannel($this->token()), 200);
    }

}