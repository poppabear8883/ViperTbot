<?php

namespace App\Http\Controllers;

use App\Playlists\Contracts\RequestedSongsInterface;
use Illuminate\Http\Request;

class RequestedSongsController extends Controller
{

    /**
     * @var RequestedSongsInterface
     */
    private $requested;

    public function __construct(RequestedSongsInterface $requested)
    {
        $this->requested = $requested;
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        return response($this->requested->getAll(), 200);
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
        $vid = $request->input('video_id');

        if ($this->requested->existsByVideoId($vid)) {
            return response('Song ' . $vid . ' already exists!', 422);
        }

        $song = $this->requested->create($request->all());

        return response($song, 200);
    }

    /**
     * @param Request $request
     * @param $video_id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Contracts\View\Factory|\Illuminate\View\View|\Symfony\Component\HttpFoundation\Response
     */
    public function show(Request $request, $video_id)
    {
        if($request->ajax())
            return response($this->requested->getByVideoId($video_id)->first(), 200);

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
     * @param Request $request
     * @param $video_id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function update(Request $request, $video_id)
    {
        $playlist = $this->requested->update($video_id, $request->all());

        return response($playlist, 200);
    }

    /**
     * @param $video_id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function destroy($video_id)
    {
        $this->requested->remove($video_id);

        return response('success', 200);
    }
}
