<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    protected $fillable = ['user_id', 'name'];

    public function songs()
    {
        return $this->hasMany(Songs::class);
    }
}
