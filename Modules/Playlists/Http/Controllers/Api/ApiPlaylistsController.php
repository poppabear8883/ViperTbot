<?php

namespace Modules\Playlists\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Modules\Playlists\Contracts\PlaylistsInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Modules\Playlists\Transformers\PlaylistResource;

class ApiPlaylistsController extends Controller
{
    /**
     * @var PlaylistsInterface
     */
    private $playlists;


    /**
     * ApiPlaylistsController constructor.
     * @param PlaylistsInterface $playlists
     */
    public function __construct(PlaylistsInterface $playlists)
    {
        $this->playlists = $playlists;
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
     *   @SWG\Parameter(
     *       description="Get the playlists associated with this User ID",
     *       in="query",
     *       name="user_id",
     *       type="integer"
     *   ),
     *   security={{"OAuth2":{}}},
     *   @SWG\Response(
     *     response=200,
     *     description="Successful Operation",
     *     @SWG\Schema(ref="#/definitions/Playlist")
     *   ),
     *   @SWG\Response(
     *     response=400,
     *     description="Error"
     *   )
     * )
     */
    public function getAll(Request $request)
    {
        $request->validate([
            'user_id' => 'integer',
        ]);

        $user_id = $request->input('user_id', null);
        $response = PlaylistResource::collection($this->playlists->getAll($user_id));
        return response($response, 200);
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
     *     @SWG\Parameter(
     *         description="The ID of the User that this playlist belongs to",
     *         in="query",
     *         name="user_id",
     *         required=true,
     *         type="integer"
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

        $response = new PlaylistResource($this->playlists->create($name, $user_id));
        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Put(
     *     path="/playlists/{id}",
     *     tags={"playlists"},
     *     operationId="updatePlaylist",
     *     summary="Update an existing playlist",
     *     description="",
     *     consumes={"application/json"},
     *     produces={"application/json"},
     *     @SWG\Parameter(
     *         name="id",
     *         in="path",
     *         type="integer",
     *         format="int64",
     *         description="The playlist id to update",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="body",
     *         in="body",
     *         description="Playlist object that needs to be updated",
     *         required=true,
     *         @SWG\Schema(ref="#/definitions/Playlist"),
     *     ),
     *     @SWG\Response(
     *         response=400,
     *         description="Invalid ID supplied",
     *     ),
     *     @SWG\Response(
     *         response=404,
     *         description="Playlist not found",
     *     ),
     *     @SWG\Response(
     *         response=405,
     *         description="Validation exception",
     *     ),
     *     security={{"OAuth2":{}}}
     * )
     */
    public function updatePlaylist(Request $request, $id)
    {
        try {
            $response = $this->playlists->update($id, $request->all());
            return response($response, 200);
        } catch (ModelNotFoundException $e) {
            return response($e->getMessage(), 404);
        }
    }

    /**
     * Removes the playlist by id
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     *
     * @SWG\Delete(
     *     path="/playlists",
     *     summary="Deletes a playlist",
     *     description="",
     *     operationId="deletePlaylist",
     *     produces={"application/json"},
     *     tags={"playlists"},
     *     @SWG\Parameter(
     *         description="Playlist id to delete",
     *         in="query",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         format="int64"
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="Success"
     *     ),
     *     @SWG\Response(
     *         response=400,
     *         description="Invalid ID supplied"
     *     ),
     *     @SWG\Response(
     *         response=404,
     *         description="Playlist not found"
     *     ),
     *     security={{"OAuth2":{}}}
     * )
     */
    public function deletePlaylist(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $id = $request->input('id');
        $response = [$this->playlists->remove($id)];
        return response($response, 200);

    }

    /**
     * Searches Youtube
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function searchYoutube(Request $request)
    {
        $term = $request->input('term', '');
        $type = $request->input('type', 'video');
        $limit = $request->input('limit', 5);

        $results = $this->playlists->searchYoutube($term, $type, $limit);

        return response($results, 200);
    }

    /**
     * Gets the Youtube's playlists content
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function playlistContent(Request $request)
    {
        $id = $request->input('id', null);

        $results = $this->playlists->playlistContent($id);

        return response()->json($results, 200);
    }
}