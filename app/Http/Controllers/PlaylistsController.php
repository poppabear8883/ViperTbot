<?php

namespace App\Http\Controllers;

use App\Playlists\Contracts\PlaylistsInterface;
use App\Playlists\Contracts\RequestedSongsInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PlaylistsController extends Controller
{

    /**
     * @var PlaylistsInterface
     */
    private $playlists;

    /**
     * @var RequestedSongsInterface
     */
    private $reqsongs;

    /**
     * PlaylistsController constructor.
     * @param PlaylistsInterface $playlists
     * @param RequestedSongsInterface $reqsongs
     */
    public function __construct(PlaylistsInterface $playlists, RequestedSongsInterface $reqsongs)
    {
        $this->playlists = $playlists;
        $this->reqsongs = $reqsongs;
    }

    /**
     * Gets all playlists
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Contracts\View\Factory|\Illuminate\View\View|\Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        $user_id = Auth::user()->id;

        return view('pages.interface.playlists', [
            'playlists' => $this->playlists->getAll($user_id),
            'requested_songs' => $this->reqsongs->getAll($user_id)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.interface.playlists');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('pages.interface.playlists');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('pages.interface.playlists');
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
