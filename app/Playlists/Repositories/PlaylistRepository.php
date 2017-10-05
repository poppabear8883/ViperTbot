<?php

namespace App\Playlists\Repositories;

use App\Playlists\Contracts\PlaylistInterface;
use App\Playlists\Playlist;

class PlaylistRepository implements PlaylistInterface
{
    /**
     * @var Playlist
     */
    private $model;

    public function __construct(Playlist $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function create($name, $user_id)
    {
        return $this->model->create([
            'name' => $name,
            'user_id' => $user_id
        ])->with('songs')
            ->get()
            ->where('name', $name)
            ->first();
    }

    public function update($id, $params)
    {
        $playlist = $this->getById($id);
        $playlist->update($params);

        return $playlist->get();
    }

    public function remove($id)
    {
        return $this->getById($id)->delete();
    }

    public function getById($id)
    {
        return $this->model->find($id);
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