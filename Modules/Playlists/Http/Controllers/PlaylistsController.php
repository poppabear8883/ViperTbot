<?php

namespace Modules\Playlists\Http\Controllers;

use Modules\Playlists\Contracts\PlaylistsInterface;
use Modules\Playlists\Contracts\RequestedSongsInterface;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
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
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        $user_id = Auth::user()->id;

        return view('playlists::index', [
            'playlists' => $this->playlists->getAll($user_id),
            'requested_songs' => $this->reqsongs->getAll($user_id)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('playlists::create');
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show()
    {
        return view('playlists::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit()
    {
        return view('playlists::edit');
    }
}
