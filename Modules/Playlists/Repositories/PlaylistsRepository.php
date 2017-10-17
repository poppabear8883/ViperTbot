<?php

namespace Modules\Playlists\Repositories;

use Alaouy\Youtube\Youtube;
use Modules\Playlists\Contracts\PlaylistsInterface;
use Modules\Playlists\Entities\Playlist;
use Modules\Playlists\Entities\RequestedSong;
use Modules\Playlists\Transformers\PlaylistResource;

class PlaylistsRepository implements PlaylistsInterface
{
    /**
     * @var Playlist
     */
    private $model;

    /**
     * @var Youtube
     */
    private $youtube;
    /**
     * @var RequestedSong
     */
    private $requested;


    /**
     * PlaylistsRepository constructor.
     *
     * @param Playlist $model
     * @param Youtube $youtube
     * @param RequestedSong $requested
     */
    public function __construct(Playlist $model, Youtube $youtube, RequestedSong $requested)
    {
        $this->model = $model;
        $this->youtube = $youtube;
        $this->requested = $requested;
    }

    /**
     * Gets all playlists
     *
     * @param $user_id integer Optionally get a users playlists
     * @return mixed
     */
    public function getAll($user_id = null)
    {
        if($user_id !== null)
            return PlaylistResource::collection(
                $this->model->where('user_id', $user_id)->get()
            );

        return PlaylistResource::collection($this->model->all());
    }

    public function getAllRequests($user_id)
    {
        return PlaylistResource::collection($this->requested->where('user_id', $user_id)->get());
    }

    /**
     * Gets all playlists with its songs relationship
     *
     * @param null $user_id
     * @return mixed
     */
    public function getAllWithSongs($user_id = null)
    {
        if($user_id !== null)
            return $this->model->with('songs')->where('user_id', $user_id)->get();

        return $this->model->with('songs')->get();
    }

    /**
     * Creates a new Playlist
     *
     * @param $name
     * @param $user_id
     * @return mixed
     */
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

    /**
     * Updates a Playlist with the given params
     *
     * @param $playlist_id
     * @param $params
     * @return mixed
     */
    public function update($playlist_id, $params)
    {
        $playlist = $this->getById($playlist_id);
        $playlist->update($params);

        return $playlist->get();
    }

    /**
     * Removes the playlist by the given id
     *
     * @param $playlist_id
     * @return mixed
     */
    public function remove($playlist_id)
    {
        return $this->getById($playlist_id)->delete();
    }

    /**
     * Get the Playlist model by the given id
     *
     * @param $playlist_id
     * @return mixed
     */
    public function getById($playlist_id)
    {
        return $this->model->findOrFail($playlist_id);
    }

    /**
     * Checks if the playlist exists by the given name
     *
     * @param $name string
     * @param $user_id integer Optionally check against the user id
     * @return bool
     */
    public function existsByName($name, $user_id = null)
    {
        if ($user_id !== null)
            return !$this->model
                ->where('name', $name)
                ->where('user_id', $user_id)
                ->get()
                ->isEmpty();

        return !$this->model
            ->where('name', $name)
            ->get()
            ->isEmpty();

    }

    /**
     * Checks if the playlist exists by the given id
     *
     * @param $playlist_id
     * @return bool
     */
    public function existsById($playlist_id)
    {
        return !$this->model
            ->where('id', $playlist_id)
            ->get()
            ->isEmpty();
    }

    /**
     * Get all songs
     *
     * @param null $playlist_id
     * @param null $user_id
     * @return array
     */
    public function getAllSongs($playlist_id = null, $user_id = null)
    {
        if ($playlist_id !== null) {
            if ($user_id !== null) {
                $playlists = $this->getPlaylistWithSongs($playlist_id, $user_id);
            } else {
                $playlists = $this->getPlaylistWithSongs($playlist_id);
            }
        } else {
            $playlists = $this->model->with('songs')->get();
        }


        $songs = [];

        foreach ($playlists as $playlist) {
            foreach ($playlist->songs as $song) {
                array_push($songs, $song);
            }
        }

        return $songs;
    }

    /**
     * Gets the playlist with the songs array
     *
     * @param $playlist_id
     * @param null $user_id
     * @return mixed
     */
    public function getPlaylistWithSongs($playlist_id, $user_id = null)
    {
        if($user_id !== null)
            return $this->model
                ->where('id', $playlist_id)
                ->where('user_id', $user_id)
                ->with('songs')
                ->get();

        return $this->model
            ->where('id', $playlist_id)
            ->with('songs')
            ->get();
    }

    /**
     * @param $term
     * @param string $type
     * @param int $limit
     * @return array
     *
     * todo: extract to youtube repository class ?
     */
    public function searchYoutube($term, $type = 'video', $limit = 5)
    {
        $params = [
            'q' => $term,
            'type' => $type,
            'part' => 'id, snippet',
            'maxResults' => $limit
        ];

        if ($type == 'video') {
            $params['videoCategoryId'] = 10;
        }

        return $this->youtube->searchAdvanced($params);
    }

    /**
     * @param $id
     * @return \StdClass
     *
     * todo: extract to youtube repository class ?
     */
    public function playlistContent($id)
    {
        return $this->youtube->getPlaylistById($id, ['contentDetails']);
    }
}