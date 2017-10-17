<?php

namespace Modules\Playlists\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Playlists\Contracts\SongsInterface;
use Illuminate\Http\Request;

class SongsController extends Controller
{

    /**
     * @var SongsInterface
     */
    private $songs;

    public function __construct(SongsInterface $songs)
    {
        $this->songs = $songs;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax())
            return response($this->songs->getAll(), 200);

        return view('pages.interface.playlists');
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pid = $request->input('playlist_id', null);
        $vid = $request->input('video_id', null);

        $songs = $this->songs->create($pid, $vid);

        return response($songs, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if($request->ajax())
            return response($this->songs->getById($request->input('playlist_id'), $id)->first(), 200);

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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return response('Not Yet Implemented', 501);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $vid
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function destroy(Request $request, $vid)
    {
        $pid = $request->input('playlist_id');

        $this->songs->remove($pid, $vid);

        return response('success', 200);
    }
}
