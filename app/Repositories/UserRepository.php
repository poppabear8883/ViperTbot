<?php namespace App\Repositories;

use App\User;

class UserRepository
{

    public function findByUsernameOrCreate($userData)
    {
        return User::firstOrCreate([
            'channel_id' => $userData->id,
            'username' => $userData->name,
            'display_name' => $userData->nickname,
            'email' => $userData->email,
            'avatar' => $userData->avatar,
            'access_token' => $userData->token
        ]);
    }

}