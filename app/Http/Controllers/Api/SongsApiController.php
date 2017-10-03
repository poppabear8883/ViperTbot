<?php namespace App\Http\Controllers\Api;

use Alaouy\Youtube\Facades\Youtube;
use App\Http\Controllers\Controller;
use App\Playlist;
use App\Song;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Response;
use Validator;

class SongsApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [
        'video_id' => 'required|string',
        'playlist_id' => 'required|integer',
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
     * @var Playlist
     */
    private $playlist;


    /**
     * Injects Playlist dependency.
     *
     * @param Song $song
     */
    public function __construct(Song $song, Playlist $playlist)
    {
        $this->song = $song;
        $this->playlist = $playlist;
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
        $id = $params['video_id'];
        $playlist_id = $params['playlist_id'];
        $songs = [];

        try {

            $video = Youtube::getVideoInfo($id);

            if (!$this->songExists($id, $playlist_id)) {
                $song = $this->song->create([
                    'video_id' => $id,
                    'title' => $video->snippet->title,
                    'playlist_id' => $playlist_id
                ]);

                array_push($songs, $song);
            } else {
                return response('The song already exists!', 422);
            }

        } catch (\Exception $msg) {

            try {
                $videos = Youtube::getPlaylistItemsByPlaylistId($id)['results'];

                $songs = $this->import($videos, $params['playlist_id']);

                if (empty($songs)) {
                    return response('Playlist already contains these songs!', 422);
                }

            } catch (\Exception $msg) {
                return response($msg, 422);
            }

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
    private function songExists($video_id, $playlist_id)
    {
        return !$this->song
            ->where('video_id', $video_id)
            ->where('playlist_id', $playlist_id)
            ->get()->isEmpty();
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

    /**
     * @param $videos
     * @return mixed
     */
    private function import($videos, $playlist_id)
    {
        $songs = [];

        foreach ($videos as $v) {

            if (!$this->songExists($v->snippet->resourceId->videoId, $playlist_id)) {

                $song = $this->song->create([
                    'video_id' => $v->snippet->resourceId->videoId,
                    'title' => $v->snippet->title,
                    'playlist_id' => $playlist_id
                ]);

                array_push($songs, $song);
            }

        }

        return $songs;
    }

}