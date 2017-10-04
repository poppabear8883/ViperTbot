<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\HandlesApiRequests;
use App\Twitch\TwitchApi;

class TwitchApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [

    ];

    /**
     * The Api instance
     *
     * @var TwitchApi
     */
    private $api;

    /**
     * Injects Api dependency.
     *
     * @param TwitchApi $api
     */
    public function __construct(TwitchApi $api)
    {
        $this->api = $api;
    }

    /**
     * Gets all songs
     *
     * @return Response
     */
    protected function all()
    {
        return response($this->api->liveChannels($this->token()), 200);
    }

    protected function myChannel()
    {
        return response($this->api->authChannel($this->token()), 200);
    }

    /**
     * @param array $params
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    protected function updateChannel($params = [])
    {
        $this->api->updateChannel($this->channel_id(), $params, $this->token());

        return response($this->api->authChannel($this->token()), 200);
    }

}