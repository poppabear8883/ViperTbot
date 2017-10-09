<?php

namespace App\Playlists\Contracts;

interface PlaylistsInterface
{
    /**
     * Gets all Playlist Models
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll();

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id);

    /**
     * @param $name
     * @param $id
     * @return mixed
     */
    public function create($name, $id);

    /**
     * @param $id
     * @param $params
     * @return mixed
     */
    public function update($id, $params);

    /**
     * @param $id
     * @return mixed
     */
    public function remove($id);

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
     * @param int $playlist_id
     * @return mixed
     */
    public function getSongs($playlist_id = 0);

    /**
     * @return mixed
     */
    public function getAllSongs();

    /**
     * @param $term
     * @param $type
     * @return mixed
     */
    public function searchYoutube($term, $type);
}