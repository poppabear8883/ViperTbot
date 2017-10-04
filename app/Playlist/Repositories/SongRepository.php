<?php

namespace App\Playlist\Repositories;

use Alaouy\Youtube\Youtube;
use App\Playlist\Contracts\SongInterface;
use App\Playlist\Song;

class SongRepository implements SongInterface
{
    /**
     * @var Song
     */
    private $model;

    /**
     * @var Youtube
     */
    private $youtube;

    public function __construct(Song $model, Youtube $youtube)
    {
        $this->model = $model;
        $this->youtube = $youtube;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function create($playlist_id, $video_id)
    {
        $songs = [];

        try {
            $songs[0] = $this->singleSong($playlist_id, $video_id);
        } catch (\Exception $e) {
            $songs = $this->multipleSongs($playlist_id, $video_id);
        }

        return $songs;
    }

    public function update($playlist_id, $video_id, $params)
    {
        // TODO: Implement update() method.
    }

    public function remove($playlist_id, $video_id)
    {
        return $this->getById($playlist_id, $video_id)->delete();
    }

    public function getById($playlist_id, $video_id)
    {
        return $this->model
            ->where('playlist_id', $playlist_id)
            ->where('video_id', $video_id);
    }

    public function existsByName($playlist_id, $name)
    {
        return !$this->model
            ->where('playlist_id', $playlist_id)
            ->where('name', $name)->get()->isEmpty();
    }

    public function existsById($playlist_id, $video_id)
    {
        return !$this->model
            ->where('video_id', $video_id)
            ->where('playlist_id', $playlist_id)
            ->get()
            ->isEmpty();
    }

    private function singleSong($playlist_id, $video_id)
    {
        $video = $this->youtube->getVideoInfo($video_id);

        if (!$this->existsById($playlist_id, $video_id)) {

            return $this->model->create([
                'video_id' => $video_id,
                'title' => $video->snippet->title,
                'playlist_id' => $playlist_id
            ]);

        } else {
            return response('The song already exists!', 422);
        }
    }

    private function multipleSongs($playlist_id, $list_id)
    {
        try {
            $videos = $this->youtube->getPlaylistItemsByPlaylistId($list_id)['results'];

            return $this->import($playlist_id, $videos);

        } catch (\Exception $e) {
            return response($e->getMessage(), 422);
        }
    }

    private function import($playlist_id, $videos)
    {
        $songs = [];

        foreach ($videos as $v) {

            if (!$this->existsById($playlist_id, $v->snippet->resourceId->videoId)) {

                $song = $this->model->create([
                    'video_id' => $v->snippet->resourceId->videoId,
                    'title' => $v->snippet->title,
                    'playlist_id' => $playlist_id
                ]);

                array_push($songs, $song);
            }

        }

        return $songs;
    }
}