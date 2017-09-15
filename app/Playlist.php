<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    protected $table = 'playlist';

    protected $fillable = [
        'user_id',
        'title',
        'video_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

}
