<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TwitchApiRepository;
use App\Traits\HandlesApiRequests;
use Validator;

class TwitchChannelsApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [

    ];

    protected $get_methods = [
        'all'
    ];

    protected $post_methods = [

    ];

    protected $patch_methods = [

    ];

    protected $put_methods = [

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



}