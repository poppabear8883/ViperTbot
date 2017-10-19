<?php

namespace Modules\Playlists\Contracts;

interface SongsInterface
{

    public function getAll($user_id);
    public function getById($id);
    public function getByVideoId($playlist_id, $video_id);
    public function create($playlist, $video_id);
    public function update($playlist_id, $video_id, $params);
    public function remove($playlist_id, $video_id);
    public function existsByName($playlist_id, $name);
    public function existsByVideoId($playlist_id, $video_id);
}