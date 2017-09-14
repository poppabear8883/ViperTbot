<?php namespace App\Repositories;

use App\User;

class UserRepository
{

    public function findByUsernameOrCreate($userData)
    {
        $user = User::where('channel_id', $userData->id)->first();

        if(!$user)
            return User::create([
                'username' => $userData->name,
                'channel_id' => $userData->id,
                'display_name' => $userData->nickname,
                'email' => $userData->email,
                'avatar' => $userData->avatar,
                'access_token' => $userData->token
            ]);

        return $user;
    }

}