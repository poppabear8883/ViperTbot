<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TwitchApiRepository;
use App\Traits\HandlesApiRequests;

class TwitchApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [

    ];

    protected $get_methods = [
        'all',
        'myChannel'
    ];

    protected $post_methods = [

    ];

    protected $patch_methods = [

    ];

    protected $put_methods = [
        'updateChannel'
    ];

    protected $delete_methods = [

    ];

    /**
     * The TwitchApiRepository instance
     *
     * @var TwitchApiRepository
     */
    private $repo;

    /**
     * Injects TwitchApiRepository dependency.
     *
     * @param TwitchApiRepository $repo
     */
    public function __construct(TwitchApiRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Gets all songs
     *
     * @return Response
     */
    protected function all()
    {
        return response($this->repo->liveChannels(), 200);
    }

    protected function myChannel()
    {
        return response($this->repo->myChannel(), 200);
    }

    protected function updateChannel($params = [])
    {
        return response($this->repo->updateChannel($params), 200);
    }




}