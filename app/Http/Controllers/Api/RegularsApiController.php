<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Regulars\Contracts\RegularsInterface;
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
     * @var RegularsInterface
     */
    private $regulars;

    /**
     * @var TwitchApi
     */
    private $twitch;

    /**
     * Injects Regular dependency.
     *
     * @param RegularsInterface $regulars
     */
    public function __construct(RegularsInterface $regulars, TwitchApi $twitch)
    {
        $this->regulars = $regulars;
        $this->twitch = $twitch;
    }

    /**
     * Gets all
     *
     * @return Response
     */
    protected function all()
    {
        return response($this->regulars->all(), 200);
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

        $song = $this->regulars->create([
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
        return !$this->regulars->where('name', $name)->get()->isEmpty();
    }

    /**
     * Get the object by name
     *
     * @param $name
     * @return Regular
     */
    private function getByName($name)
    {
        return $this->regulars->where('name', $name);
    }

    private function getTwitchDataByName($name)
    {
        return (object) $this->twitch->users(['login' => $name])['users'][0];
    }
}