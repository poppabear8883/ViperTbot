<?php

namespace App\Playlist\Contracts;

interface PlaylistInterface
{
    function all();
    function create($params = []);
}