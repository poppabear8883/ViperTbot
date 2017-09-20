<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\HandlesApiRequests;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UsersApiController extends Controller
{
    use HandlesApiRequests;

    protected $rules = [

    ];

    protected $get_methods = [
        'getAuthUser'
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
     * The User instance
     *
     * @var User
     */
    private $user;

    /**
     * Injects User dependency.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Gets the currently authorized User Object
     *
     * @return Response
     */
    protected function getAuthUser()
    {
        return response(Auth::user(), 200);
    }


}