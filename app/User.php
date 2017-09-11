<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /*
     * User Model from Twitch
     *
     * EXAMPLE:
     *
      User {#197 ▼
          +accessTokenResponseBody: array:3 [▶]
          +token: "o8dbgvv77xar4aei9jif4c73o48y31"
          +refreshToken: "rjt9g82m2f65ce5c6yxurlyxgsb3r80e7ducfcxhs9jxrokx64"
          +expiresIn: null
          +id: 170713994
          +nickname: "xIPoppabearIx"
          +name: "xipoppabearix"
          +email: "servnx@gmail.com"
          +avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/61cb61f8a695ec8a-profile_image-300x300.png"
          +user: array:12 [▼
            "display_name" => "xIPoppabearIx"
            "_id" => 170713994
            "name" => "xipoppabearix"
            "type" => "user"
            "bio" => null
            "created_at" => "2017-08-20T17:13:37Z"
            "updated_at" => "2017-09-10T22:35:45Z"
            "logo" => "https://static-cdn.jtvnw.net/jtv_user_pictures/61cb61f8a695ec8a-profile_image-300x300.png"
            "_links" => array:1 [▶]
            "email" => "servnx@gmail.com"
            "partnered" => false
            "notifications" => array:2 [▶]
          ]
        }
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'display_name',
        'email',
        'twitch_id',
        'type',
        'bio',
        'logo',
        'partnered'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
    ];
}
