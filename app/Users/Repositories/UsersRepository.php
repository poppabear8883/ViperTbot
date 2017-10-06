<?php

namespace App\Users\Repositories;

use App\Users\Contracts\UsersInterface;
use App\Users\User;

class UsersRepository implements UsersInterface
{

    /**
     * @var User
     */
    private $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function findByUsernameOrCreate($userData)
    {
        $user = $this->model->where('channel_id', $userData->id)->first();

        if(!$user)
            return $this->model->create([
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