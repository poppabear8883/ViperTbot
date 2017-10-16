<?php

namespace App\Playlists\Contracts;

interface RequestedSongsInterface
{
    /**
     * Gets all Playlist Models
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll($user_id = null);

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id);

    /**
     * @param $video_id
     * @return mixed
     */
    public function getByVideoId($video_id);

    /**
     * @param $name
     * @param $id
     * @return mixed
     */
    public function create($params);

    /**
     * @param $id
     * @param $params
     * @return mixed
     */
    public function update($id, $params);

    /**
     * @param $video_id
     * @return mixed
     */
    public function remove($video_id);

    /**
     * @param $name
     * @return mixed
     */
    public function existsByName($name);

    /**
     * @param $id
     * @return mixed
     */
    public function existsById($id);

    /**
     * @param $video_id
     * @return mixed
     */
    public function existsByVideoId($video_id);

    /**
     * @param int $playlist_id
     * @return mixed
     */
    public function getSongs($playlist_id = 0);

    /**
     * @return mixed
     */
    public function getAllSongs();
}