<?php

namespace Modules\Playlists\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Playlists\Contracts\RequestedSongsInterface;
use Modules\Playlists\Transformers\ReqSongResource;

class ApiReqSongsController extends Controller
{
    /**
     * @var RequestedSongsInterface
     */
    private $reqsong;

    /**
     * ApiReqSongsController constructor.
     * @param RequestedSongsInterface $reqsong
     */
    public function __construct(RequestedSongsInterface $reqsong)
    {
        $this->reqsong = $reqsong;
    }

    /**
     * Gets all requested songs
     *
     * @SWG\Get(path="/reqsongs",
     *   tags={"reqsongs"},
     *   summary="Get all requested songs",
     *   description="",
     *   operationId="getAll",
     *   produces={"application/json"},
     *   @SWG\Parameter(
     *       description="Get the Requested Songs associated with this User ID",
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
     *   ),
     *   @SWG\Response(
     *     response=422,
     *     description="Validation Error"
     *   )
     * )
     */
    public function getAll(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
        ]);

        $user_id = $request->input('user_id');
        $response = ReqSongResource::collection($this->reqsong->getAll($user_id));
        return response($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/reqssongs",
     *     tags={"reqsongs"},
     *     operationId="addReqSong",
     *     summary="Add a new requested song to the playlist",
     *     description="",
     *     consumes={"application/json"},
     *     produces={"application/json"},
     *     @SWG\Parameter(
     *         description="The Title",
     *         in="query",
     *         name="title",
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
    public function addReqSong(Request $request)
    {
        $user_id = $request->input('user_id');
        $title = $request->input('title');
        $video_id = $request->input('video_id');
        $requested_by = $request->input('requested_by');

        if ($this->reqsong->existsByVideoId($video_id)) {
            return response('Song already exists', 422);
        }

        $response = new ReqSongResource($this->reqsong->create($user_id, $title, $video_id, $requested_by));
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
     * Removes the requested song by the video_id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     *
     * @SWG\Delete(
     *     path="/reqsongs/{video_id}",
     *     summary="Deletes a requested song by the given video id",
     *     description="",
     *     operationId="destroyReqSong",
     *     produces={"application/json"},
     *     tags={"reqsongs"},
     *     @SWG\Parameter(
     *         description="Video ID of the song to delete",
     *         in="path",
     *         name="video_id",
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
     *     security={{"OAuth2":{}}}
     * )
     */
    public function destroyReqSong(Request $request)
    {
        $request->validate([
            'video_id' => 'required|string'
        ]);

        $this->reqsong->remove($request->input('video_id'));

        return response(true, 200);
    }


}