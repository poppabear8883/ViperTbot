<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller {

    public function login(Request $request) {

        if(!$request->has('code'))
            return Socialite::driver('twitch')->redirect();

        $user = Socialite::driver('twitch')->user();

        dd($user);

    }

}