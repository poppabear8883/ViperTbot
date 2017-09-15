<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReqPlaylist extends Model
{
    protected $table = 'reqplaylist';

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
