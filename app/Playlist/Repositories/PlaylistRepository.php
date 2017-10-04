<?php

namespace App\Playlist\Repositories;

use App\Playlist\Contracts\PlaylistInterface;
use App\Playlist;

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


    function all()
    {
        return $this->model->all();
    }

    function create($params = [])
    {
        $this->model->create([

        ]);
    }
}