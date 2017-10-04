<?php

namespace App\Http\Controllers\Api\Playlists;

use App\Http\Controllers\Controller;

use App\Playlist\Contracts\PlaylistInterface;

use App\Traits\HandlesApiRequests;

abstract class API extends Controller
{
    use HandlesApiRequests;

    protected $rules = [
        'name' => 'required|string',
    ];

    protected $get_methods = [
        'all'
    ];

    protected $post_methods = [
        'create'
    ];

    protected $patch_methods = [
        'update'
    ];

    protected $put_methods = [
        'update'
    ];

    protected $delete_methods = [
        'remove'
    ];


    /**
     * @var PlaylistInterface
     */
    protected $playlist;


    /**
     * Injects Playlist dependency.
     *
     * @param PlaylistInterface $playlist
     */
    public function __construct(PlaylistInterface $playlist)
    {
        $this->playlist = $playlist;
    }
}