<?php

namespace App\Contracts;

use App\Http\Controllers\Api\Playlists\Response;

interface ApiControllerInterface
{
    /**
     * Gets all songs
     *
     * @return Response
     */
    public function all();

    /**
     * Creates a song
     *
     * @param array $params
     * @return Response
     */
    public function create($params = []);

    /**
     * Updates the playlist
     *
     * @param array $params
     * @return Response
     */
    public function update($params = []);

    /**
     * Removes a song
     *
     * @param array $params
     * @return Response
     */
    public function remove($params = []);
}