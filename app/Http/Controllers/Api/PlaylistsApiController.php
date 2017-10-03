<?php namespace App\Http\Controllers\Api;

use Alaouy\Youtube\Facades\Youtube;
use App\Http\Controllers\Controller;
use App\Playlist;
use App\Traits\HandlesApiRequests;
use Illuminate\Support\Facades\Auth;
use Validator;

class PlaylistsApiController extends Controller
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
     * @var Playlist
     */
    private $playlist;


    /**
     * Injects Playlist dependency.
     *
     * @param Playlist $playlist
     */
    public function __construct(Playlist $playlist)
    {
        $this->playlist = $playlist;
    }

    /**
     * Gets all songs
     *
     * @return Response
     */
    protected function all()
    {
        return response($this->playlist->all(), 200);
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
        $name = $params['name'];

        if ($this->playlistExists($name)) {
            return response('Playlist already exists', 422);
        }

        $playlist = $this->playlist->create([
            'name' => $name,
            'user_id' => Auth::user()->id
        ])
            ->with('songs')
            ->get()
            ->where('name', $name)
            ->first();

        //dd($playlist->with('songs')->get());

        return response($playlist, 200);
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

        $song = $this->getPlaylistById($params['id']);

        return response($song->delete(), 200);
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

        $playlist = $this->getPlaylistById($params['id']);
        $playlist->update($params);

        return response($playlist->get(), 200);

    }

    /**
     * Checks if a playlist already exists
     *
     * @param $name
     * @return bool
     */
    private function playlistExists($name)
    {
        return !$this->playlist->where('name', $name)->get()->isEmpty();
    }

    /**
     * Get the Playlist object by id
     *
     * @param $id
     * @return Playlist
     */
    private function getPlaylistById($id)
    {
        return $this->playlist->where('id', $id);
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