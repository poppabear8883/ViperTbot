<?php namespace App\Http\Controllers\Api\Playlists;

use App\Contracts\ApiControllerInterface;
use App\Http\Controllers\Controller;
use App\Playlist\Contracts\PlaylistInterface;
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

    /**
     * Gets all playlists
     *
     * @return Response
     */
    public function all()
    {
        return response($this->playlist->getAll(), 200);
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

        if ($this->playlist->existsByName($name)) {
            return response('Playlist already exists', 422);
        }

        $playlist = $this->playlist->create($name, Auth::user()->id);

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

        $playlist = $this->playlist->update($params['id'], $params);

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

        $playlist = $this->playlist->remove($params['id']);

        return response($playlist, 200);
    }

}