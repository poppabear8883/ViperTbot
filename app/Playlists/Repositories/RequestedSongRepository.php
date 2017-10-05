<?php

namespace App\Playlists\Repositories;

use App\Playlists\Contracts\RequestedSongInterface;
use App\Playlists\RequestedSong;

class RequestedSongRepository implements RequestedSongInterface
{
    /**
     * @var RequestedSong
     */
    private $model;

    public function __construct(RequestedSong $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function create($title, $video_id, $requested_by, $user_id)
    {
        return $this->model->create([
            'title' => $title,
            'video_id' => $video_id,
            'requested_by' => $requested_by,
            'user_id' => $user_id
        ]);
    }

    public function update($id, $params)
    {
        $playlist = $this->getById($id);
        $playlist->update($params);

        return $playlist->get();
    }

    public function remove($video_id)
    {
        return $this->getByVideoId($video_id)->delete();
    }

    public function getById($id)
    {
        return $this->model->find($id);
    }

    public function getByVideoId($video_id)
    {
        return $this->model->where('video_id', $video_id)->first();
    }

    public function existsByVideoId($video_id)
    {
        return !$this->model->where('video_id', $video_id)->get()->isEmpty();
    }

    public function existsByName($name)
    {
        return !$this->model->where('name', $name)->get()->isEmpty();
    }

    public function existsById($id)
    {
        return !$this->model->where('id', $id)->get()->isEmpty();
    }

    public function getSongs($playlist_id = 0)
    {
        return $this->model->with('songs')->find($playlist_id)->get();
    }

    public function getAllSongs()
    {
        $playlists = $this->model->with('songs')->get();
        $songs = [];

        foreach ($playlists as $playlist) {
            foreach ($playlist->songs as $song) {
                array_push($songs, $song);
            }
        }

        return $songs;
    }
}