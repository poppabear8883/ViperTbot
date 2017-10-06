<?php

namespace App\Playlists;

use App\Users\User;
use Illuminate\Database\Eloquent\Model;

class RequestedSong extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'video_id',
        'requested_by'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
