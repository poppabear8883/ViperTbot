<?php

namespace App\Playlists;

use App\Users\User;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    protected $fillable = ['user_id', 'name'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}
