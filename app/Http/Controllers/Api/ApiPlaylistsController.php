<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Playlists\Contracts\PlaylistsInterface;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;

class ApiPlaylistsController extends Controller
{
    /**
     * @var PlaylistsInterface
     */
    private $playlists;

    /**
     * @var AuthManager
     */
    private $auth;

    /**
     * ApiPlaylistsController constructor.
     * @param PlaylistsInterface $playlists
     */
    public function __construct(PlaylistsInterface $playlists)
    {
        $this->playlist = $playlists;
    }

    /**
     * Gets all playlists
     *
     * @SWG\Get(path="/playlists",
     *   tags={"playlists"},
     *   summary="Get all playlists",
     *   description="",
     *   operationId="getAll",
     *   produces={"application/json"},
     *   security={{"OAuth2":{}}},
     *   @SWG\Response(response=200, description="successful operation", @SWG\Schema(ref="#/definitions/Playlist")),
     *   @SWG\Response(response=400, description="Response Error")
     * )
     */
    public function getAll()
    {
        return response($this->playlists->getAll(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/playlists",
     *     tags={"playlists"},
     *     operationId="addPlaylist",
     *     summary="Add a new playlist to the database",
     *     description="",
     *     consumes={"application/json"},
     *     produces={"application/json"},
     *     @SWG\Parameter(
     *         description="Name of the Playlist",
     *         in="query",
     *         name="name",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Response(
     *         response=405,
     *         description="Invalid input",
     *     ),
     *     security={{"OAuth2":{}}}
     * )
     */
    public function addPlaylist(Request $request)
    {
        $name = $request->input('name');
        $user_id = $request->input('user_id');

        if ($this->playlists->existsByName($name, $user_id)) {
            return response('Playlist already exists', 422);
        }

        $playlist = $this->playlists->create($name, $user_id);

        return response($playlist, 200);
    }
}