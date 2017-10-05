<?php namespace App\Http\Controllers\Api;

use App\Contracts\ApiControllerInterface;
use App\Http\Controllers\Controller;
use App\Playlists\Contracts\RequestedSongInterface;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Auth;
use Validator;

class RequestedSongsApiController extends Controller implements ApiControllerInterface
{
    use HandlesApiRequests;

    // todo: remove $rules and make each method validate its own rules
    protected $rules = [
        'title' => 'string',
        'requested_by' => 'string',
        'video_id' => 'required|string'
    ];

    /**
     * The RequestedSong instance
     *
     * @var RequestedSongInterface
     */
    private $song;

    /**
     * Injects Playlist dependency.
     *
     * @param RequestedSongInterface $song
     */
    public function __construct(RequestedSongInterface $song)
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

        if ($this->song->existsByVideoId($params['video_id'])) {
            return response(
                'Song ' . $params['video_id'] . ' already exists!',
                422
            );
        }

        $song = $this->song->create(
            $params['title'],
            $params['video_id'],
            $params['requested_by'],
            Auth::user()->id
        );

        return response($song, 200);
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

        $this->song->remove($params['video_id']);

        return response('success', 200);
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

        $playlist = $this->song->update($params['id'], $params);

        return response($playlist, 200);
    }
}