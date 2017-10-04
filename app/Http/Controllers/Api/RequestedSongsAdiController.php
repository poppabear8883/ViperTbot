<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\RequestedSong;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Auth;
use Validator;

class RequestedSongsAdiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [
        'video_id' => 'required|string',
        'requested_by' => 'string|required',
        'title' => 'string'
    ];

    /**
     * The Playlist instance
     *
     * @var Song
     */
    private $song;

    /**
     * Injects Playlist dependency.
     *
     * @param Song $playlist
     */
    public function __construct(RequestedSong $song)
    {
        $this->song = $song;
    }

    /**
     * Gets all songs
     *
     * @return Response
     */
    protected function all()
    {
        return response($this->song->all(), 200);
    }

    /**
     * Creates a song
     *
     * @param array $params
     * @return Response
     */
    protected function create($params = [])
    {
        $this->isValid($params);

        if ($this->songExists($params['video_id'])) {
            return response([
                'errors' => 'Song ' . $params['video_id'] . ' already exists!'
            ], 422);
        }

        $song = $this->song->create([
            'video_id' => $params['video_id'],
            'user_id' => Auth::user()->id,
            'requested_by' => $params['requested_by']
        ]);

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

        $song = $this->getSongByVideoId($params['video_id']);

        return response($song->delete(), 200);
    }

    /**
     * Updates the songs title
     *
     * @param array $params
     * @return Response
     */
    public function updateTitle($params = [])
    {
        $this->isValid($params);

        $song = $this->getSongByVideoId($params['video_id']);
        $song->update(['title' => $params['title']]);

        return response($song->get(), 200);

    }

    /**
     * Checks if a song already exists
     *
     * @param $video_id
     * @return bool
     */
    private function songExists($video_id)
    {
        return !$this->song->where('video_id', $video_id)->get()->isEmpty();
    }

    /**
     * Get the Playlist object by video_id
     *
     * @param $video_id
     * @return Song
     */
    private function getSongByVideoId($video_id)
    {
        return $this->song->where('video_id', $video_id);
    }

}