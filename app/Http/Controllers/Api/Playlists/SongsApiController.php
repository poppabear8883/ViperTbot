<?php namespace App\Http\Controllers\Api\Playlists;

use App\Contracts\ApiControllerInterface;
use App\Http\Controllers\Controller;
use App\Playlist\Contracts\SongInterface;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Response;
use Validator;

class SongsApiController extends Controller implements ApiControllerInterface
{
    use HandlesApiRequests;

    protected $rules = [
        'video_id' => 'required|string',
        'playlist_id' => 'required|integer',
        'title' => 'string'
    ];

    /**
     * The Song instance
     *
     * @var Song
     */
    private $song;

    /**
     * Injects Playlist dependency.
     *
     * @param SongInterface $song
     */
    public function __construct(SongInterface $song)
    {
        $this->song = $song;
    }

    /**
     * Gets all songs
     *
     * @return Response
     */
    public function all()
    {
        return response($this->song->getAll(), 200);
    }

    /**
     * Creates a song
     *
     * @param array $params
     * @return Response
     */
    public function create($params = [])
    {
        $this->isValid($params);

        $songs = $this->song->create($params['playlist_id'], $params['video_id']);

        if (empty($songs)) {
            return response('No songs to add!', 422);
        }

        return response($songs, 200);
    }

    /**
     * Removes a song
     *
     * @param array $params
     * @return Response
     */
    public function remove($params = [])
    {
        $this->isValid($params);

        $song = $this->song->remove($params['playlist_id'], $params['video_id']);

        return response($song, 200);
    }

    /**
     * Updates the playlist
     *
     * @param array $params
     * @return Response
     */
    public function update($params = [])
    {
        // TODO: Implement update() method.
        throw new \Exception('Not Yet Implemented');
    }
}