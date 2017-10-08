<?php

namespace App\Users\Contracts;

interface UsersInterface
{
    /**
     * @return array
     */
    public function data();

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll();

    /**
     * @param $userData
     * @return mixed
     */
    public function findByUsernameOrCreate($userData);

    /**
     * @return mixed
     */
    public function channel();

    /**
     * @return mixed
     */
    public function playlists();

    /**
     * @return mixed
     */
    public function requestedSongs();

    /**
     * @return mixed
     */
    public function regulars();

    /**
     * @return mixed
     */
    public function songs();

    /**
     * @return mixed
     */
    public function account();
}