<?php

namespace Modules\Playlists\Entities;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{

    protected $fillable = [
        'playlist_id',
        'title',
        'video_id'
    ];

    public function playlists()
    {
        return $this->belongsToMany(Playlist::class);
    }
}
