<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller {

    public function index() {
        return view('pages.interface.index');
    }

    public function login() {
        return view('pages.interface.auth');
    }

    public function authenticate(Request $request) {
        if(!$request->has('code'))
            return Socialite::driver('twitch')->redirect();

        $user = Socialite::driver('twitch')->user();

        dd($user);
    }

}