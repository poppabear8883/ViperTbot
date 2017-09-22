<?php namespace App\Http\Controllers;

use App\Twitch\TwitchApi;

class InterfaceController extends Controller
{
    /**
     * @var TwitchApi
     */
    private $twitch;

    /**
     * InterfaceController constructor.
     * @param TwitchApi $twitch
     */
    public function __construct(TwitchApi $twitch)
    {
        $this->twitch = $twitch;
    }

    /**
     * @return array
     */
    private function data()
    {
        return [
            //'followers' => $this->followers(),
            'subscribers' => $this->subscribers(),
            'access_token' => $this->token(),
            'channel_id' => $this->channel_id()
        ];
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('pages.interface.index', $this->data());
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
}