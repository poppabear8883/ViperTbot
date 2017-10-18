<?php

namespace Modules\Playlists\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Playlists\Contracts\RequestedSongsInterface;

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

        return response($this->reqsong->getAll($user_id), 200);
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