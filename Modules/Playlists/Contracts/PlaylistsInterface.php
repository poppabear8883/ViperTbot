<?php

namespace Modules\Playlists\Contracts;

interface PlaylistsInterface
{
    public function getAll($user_id = null);
    public function getAllRequests($user_id);
    public function getAllWithSongs($user_id = null);
    public function getById($playlist_id);
    public function create($name, $id);
    public function update($playlist_id, $params);
    public function remove($playlist_id);
    public function existsByName($name, $user_id = null);
    public function existsById($playlist_id);
    public function getAllSongs();
    public function getPlaylistWithSongs($playlist_id, $user_id = null);
    public function searchYoutube($term, $type, $limit = 5);
    public function playlistContent($id);
}