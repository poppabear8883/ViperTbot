<?php

namespace Modules\Playlists\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Playlists\Contracts\SongsInterface;

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

        return response($this->songs->getAll($user_id), 200);
    }
}