<?php namespace App\Http\Controllers\Api;

use Alaouy\Youtube\Facades\Youtube;
use App\Http\Controllers\Controller;
use App\Song;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Auth;
use Validator;

class PlaylistApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [
        'video_id' => 'required|string',
        'title' => 'string'
    ];

    protected $get_methods = [
        'all'
    ];

    protected $post_methods = [
        'create'
    ];

    protected $patch_methods = [
        'updateTitle'
    ];

    protected $put_methods = [
        'updateTitle'
    ];

    protected $delete_methods = [
        'remove'
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
    public function __construct(Song $song)
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

        $video = Youtube::getVideoInfo($params['video_id']);

        if (!$video) {
            return response([
                'errors' => 'Invalid video id: ' . $params['video_id']
            ], 422);
        }

        $song = $this->song->create([
            'video_id' => $params['video_id'],
            'title' => $video->snippet->title,
            'user_id' => Auth::user()->id
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

    /**
     * Checks the validation rules for the request
     *
     * @param array $params
     * @return Response|bool
     */
    private function isValid($params)
    {
        $validator = Validator::make($params, $this->rules);

        if ($validator->fails()) {
            return response(['errors' => $validator->failed()], 422);
        }

        return true;
    }

}