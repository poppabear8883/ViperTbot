<?php namespace App\Http\Controllers;

use App\Authentication\AuthenticateUser;
use App\Contracts\AuthenticateUserListener;
use Illuminate\Http\Request;

class AuthController extends Controller implements AuthenticateUserListener
{

    public function index()
    {
        return view('pages.interface.index');
    }

    public function login()
    {
        return view('pages.interface.auth');
    }

    public function authenticate(AuthenticateUser $auth, Request $request)
    {
        return $auth->execute($request->has('code'), $this);
    }

    public function userHasLoggedIn()
    {
        return redirect('/');
    }
}