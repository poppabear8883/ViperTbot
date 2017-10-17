<?php

namespace Modules\Playlists\Entities;

use App\Users\User;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Playlist
 * @package App\Playlists
 */
class Playlist extends Model
{

    protected $fillable = ['user_id', 'name'];

    /**
     * The user relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The users songs relationship
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}
