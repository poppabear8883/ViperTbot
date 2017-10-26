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
    private $api;


    /**
     * TwitchController constructor.
     * @param TwitchApi $api
     */
    public function __construct(TwitchApi $api)
    {
        $this->api = $api;
    }

    /**
     * Followed streams who are live.
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function liveChannels()
    {
        return response($this->api->liveChannels($this->token()), 200);
    }

    public function following()
    {
        $following = $this->api->followings($this->channel_id(), []);
        return response([
            'total' => $following['_total'],
            'streams' => $following['follows'],
            'online' => $this->api->liveChannels($this->token())
        ], 200);
    }


    /**
     * Get authenticated channel object.
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function authChannel()
    {
        return response($this->api->authChannel($this->token()), 200);
    }


    /**
     * Update channel.
     *
     * @param array $params
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function updateChannel(Request $request)
    {
        $this->api->updateChannel($this->channel_id(), $request->all(), $this->token());
        return response($this->api->authChannel($this->token()), 200);
    }

}