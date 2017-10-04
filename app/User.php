<?php

namespace App;

use App\Playlist\Playlist;
use App\Playlist\Song;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'channel_id',
        'username',
        'display_name',
        'email',
        'avatar',
        'access_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token'
    ];

    public function requestedSongs()
    {
        return $this->hasMany(RequestedSong::class);
    }

    public function regulars()
    {
        return $this->hasMany(Regular::class);
    }

    public function playlists()
    {
        return $this->hasMany(Playlist::class);
    }

    public function songs()
    {
        return $this->hasManyThrough(Song::class, Playlist::class);
    }
}
