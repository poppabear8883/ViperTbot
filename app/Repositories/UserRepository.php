<?php namespace App\Repositories;

use App\User;

class UserRepository
{

    public function findByUsernameOrCreate($userData)
    {
        return User::firstOrCreate([
            'username' => $userData->name,
            'display_name' => $userData->nickname,
            'email' => $userData->email,
            'avatar' => $userData->avatar
        ]);
    }

}