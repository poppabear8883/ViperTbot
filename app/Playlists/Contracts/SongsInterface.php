<?php

namespace App\Playlists\Contracts;

interface SongsInterface
{
    /**
     * @return mixed
     */
    public function getAll();

    /**
     * @param $playlist_id
     * @param $video_id
     * @return mixed
     */
    public function getById($playlist_id, $video_id);

    /**
     * @param $playlist_id
     * @param $video_id
     * @return mixed
     */
    public function create($playlist_id, $video_id);

    /**
     * @param $playlist_id
     * @param $video_id
     * @param $params
     * @return mixed
     */
    public function update($playlist_id, $video_id, $params);

    /**
     * @param $playlist_id
     * @param $video_id
     * @return mixed
     */
    public function remove($playlist_id, $video_id);

    /**
     * @param $playlist_id
     * @param $name
     * @return mixed
     */
    public function existsByName($playlist_id, $name);

    /**
     * @param $playlist_id
     * @param $video_id
     * @return mixed
     */
    public function existsById($playlist_id, $video_id);
}