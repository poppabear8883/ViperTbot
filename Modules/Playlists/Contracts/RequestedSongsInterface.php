<?php

namespace Modules\Playlists\Contracts;

interface RequestedSongsInterface
{
    public function getAll($user_id);
    public function getById($id);
    public function getByVideoId($video_id);
    public function create($user_id, $title, $video_id, $requested_by);
    public function update($id, $params);
    public function remove($video_id);
    public function existsByName($name);
    public function existsById($id);
    public function existsByVideoId($video_id);
    public function getSongs($playlist_id = 0);
    public function getAllSongs();
}