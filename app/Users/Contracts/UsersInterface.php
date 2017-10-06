<?php

namespace App\Users\Contracts;

interface UsersInterface
{
    public function getAll();

    public function findByUsernameOrCreate($userData);
}