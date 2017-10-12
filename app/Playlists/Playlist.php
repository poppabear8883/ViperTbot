<?php

namespace App\Playlists;

use App\Users\User;
use Illuminate\Database\Eloquent\Model;

/**
 * @SWG\Definition(type="object", @SWG\Xml(name="Playlist"))
 */
class Playlist extends Model
{
    /**
    * @SWG\Property(example="rap")
    * @var string
    */
    public $name;

    /**
    * @SWG\Property(format="int64", example=1)
    * @var integer
    */
    public $user_id;


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
