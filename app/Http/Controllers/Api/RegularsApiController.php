<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Regular;
use App\Traits\HandlesApiRequests;
use App\Twitch\TwitchApi;
use Illuminate\Support\Facades\Auth;
use Validator;

class RegularsApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [
        'name' => 'required|string',
    ];

    /**
     * The Regular instance
     *
     * @var Regular
     */
    private $regular;

    /**
     * @var TwitchApi
     */
    private $twitch;

    /**
     * Injects Regular dependency.
     *
     * @param Regular $playlist
     */
    public function __construct(Regular $regular, TwitchApi $twitch)
    {
        $this->regular = $regular;
        $this->twitch = $twitch;
    }

    /**
     * Gets all
     *
     * @return Response
     */
    protected function all()
    {
        return response($this->regular->all(), 200);
    }

    /**
     * Creates
     *
     * @param array $params
     * @return Response
     */
    protected function create($params = [])
    {
        $this->isValid($params);

        if ($this->exists($params['name'])) {
            return response([
                'errors' => 'Song ' . $params['name'] . ' already exists!'
            ], 422);
        }

        $data = $this->getTwitchDataByName($params['name']);

        $song = $this->regular->create([
            'user_id' => Auth::user()->id,
            'name' => $data->name,
            'display_name' => $data->display_name,
            'channel_id' => $data->_id,
            'logo' => $data->logo
        ]);

        return response($song, 200);
    }

    /**
     * Removes
     *
     * @param array $params
     * @return Response
     */
    public function remove($params = [])
    {
        $this->isValid($params);

        $song = $this->getByName($params['name']);

        return response($song->delete(), 200);
    }

    /**
     * Updates
     *
     * @param array $params
     * @return Response
     */
    public function update($params = [])
    {
        $this->isValid($params);

        $song = $this->getByName($params['name']);

        //$song->update(['title' => $params['title']]);

        return response($song->get(), 200);

    }

    /**
     * Checks if already exists
     *
     * @param $name
     * @return bool
     */
    private function exists($name)
    {
        return !$this->regular->where('name', $name)->get()->isEmpty();
    }

    /**
     * Get the object by name
     *
     * @param $name
     * @return Regular
     */
    private function getByName($name)
    {
        return $this->regular->where('name', $name);
    }

    private function getTwitchDataByName($name)
    {
        return (object) $this->twitch->users(['login' => $name])['users'][0];
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