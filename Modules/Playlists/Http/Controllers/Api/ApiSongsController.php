<?php

namespace Modules\Playlists\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Playlists\Contracts\SongsInterface;
use Modules\Playlists\Transformers\SongResource;

class ApiSongsController extends Controller
{
    /**
     * @var SongsInterface
     */
    private $songs;

    public function __construct(SongsInterface $songs)
    {
        $this->songs = $songs;
    }

    public function getAll(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
        ]);

        $user_id = $request->input('user_id');
        $response = SongResource::collection($this->songs->getAll($user_id));
        return response($response, 200);
    }

    public function addSong(Request $request)
    {
        $request->validate([
            'playlist_id' => 'required|integer',
            'video_id' => 'required|string'
        ]);

        $playlist_id = $request->input('playlist_id');
        $video_id = $request->input('video_id');
        $response = $this->songs->create($playlist_id, $video_id);

        if (!is_array($response)) {
            return response(['Invalid Url or ID provided!'], 400);
        }

        return response($response, 200);
    }

    public function deleteSong(Request $request)
    {
        $request->validate([
            'playlist_id' => 'required|integer',
            'video_id' => 'required|string'
        ]);

        $playlist_id = $request->input('playlist_id');
        $video_id = $request->input('video_id');
        $response = [$this->songs->remove($playlist_id, $video_id)];
        return response($response, 200);

    }
}