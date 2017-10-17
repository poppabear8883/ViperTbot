<?php

namespace App\Users;

use Modules\Playlists\Entities\Playlist;
use Modules\Playlists\Entities\RequestedSong;
use Modules\Playlists\Entities\Song;
use App\Regulars\Regular;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

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
