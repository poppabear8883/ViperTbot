<?php

namespace App\ViewComposers;

use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use App\Twitch\TwitchApi;

class AllViewsComposer
{
    /**
     * The twitch repository implementation.
     *
     * @var TwitchApi
     */
    protected $twitch;

    /**
     * Create a new profile composer.
     *
     * @param  TwitchApi $twitch
     * @return void
     */
    public function __construct(TwitchApi $twitch)
    {
        $this->twitch = $twitch;
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        if(!Auth::guest()) {
            $data = [
                'subscribers' => $this->subscribers(),
                'access_token' => $this->token(),
                'channel_id' => $this->channel_id()
            ];

            $view->with($data);
        }
    }

    /**
     * @return \Zarlach\TwitchApi\API\JSON
     */
    private function followers()
    {
        return $this->twitch->followers($this->channel_id());
    }

    /**
     * @return \Zarlach\TwitchApi\API\JSON
     */
    private function subscribers()
    {
        return $this->twitch->subscribers($this->channel_id(), [], $this->token());
    }

    /**
     * @return \Zarlach\TwitchApi\API\JSON
     */
    private function liveChannels()
    {
        return $this->twitch->liveChannels($this->token());
    }

    private function token()
    {
        return Auth::user()->access_token;
    }

    private function channel_id()
    {
        return Auth::user()->channel_id;
    }
}