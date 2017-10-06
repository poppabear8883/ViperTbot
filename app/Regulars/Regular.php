<?php

namespace App\Regulars;

use App\Users\User;
use Illuminate\Database\Eloquent\Model;

class Regular extends Model
{
    protected $fillable = [
        'name',
        'display_name',
        'channel_id',
        'user_id',
        'logo'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
