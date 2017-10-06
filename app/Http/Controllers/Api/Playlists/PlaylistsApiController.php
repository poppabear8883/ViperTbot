<?php namespace App\Http\Controllers\Api\Playlists;

use App\Api\v1\Contracts\ApiControllerInterface;
use App\Http\Controllers\Controller;
use App\Playlists\Contracts\PlaylistsInterface;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Auth;
use Validator;

class PlaylistsApiController extends Controller implements ApiControllerInterface
{
    use HandlesApiRequests;

    protected $rules = [
        'name' => 'required|string',
    ];

    /**
     * @var PlaylistsInterface
     */
    protected $playlists;


    /**
     * Injects Playlist dependency.
     *
     * @param PlaylistsInterface $playlist
     */
    public function __construct(PlaylistsInterface $playlists)
    {
        $this->playlists = $playlists;
    }

    /**
     * Gets all playlists
     *
     * @return Response
     */
    public function all()
    {
        return response($this->playlists->getAll(), 200);
    }

    /**
     * Creates a playlist
     *
     * @param array $params
     * @return Response
     */
    public function create($params = [])
    {
        $this->isValid($params);
        $name = $params['name'];

        if ($this->playlists->existsByName($name)) {
            return response('Playlist already exists', 422);
        }

        $playlist = $this->playlists->create($name, Auth::user()->id);

        return response($playlist, 200);
    }

    /**
     * Updates the playlist
     *
     * @param array $params
     * @return Response
     */
    public function update($params = [])
    {
        $this->isValid($params);

        $playlist = $this->playlists->update($params['id'], $params);

        return response($playlist, 200);

    }

    /**
     * Removes a playlist
     *
     * @param array $params
     * @return Response
     */
    public function remove($params = [])
    {
        $this->isValid($params);

        $this->playlists->remove($params['id']);

        return response('success', 200);
    }

}