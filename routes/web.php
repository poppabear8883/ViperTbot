<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function () {

    Route::get('/', 'InterfaceController@index');

    Route::get('applications', function() {
        return view('pages.interface.applications');
    });

    Route::get('logout', function() {
        \Auth::logout();
        return redirect('login');
    });
});

Route::middleware(['guest'])->group(function () {
    Route::get('login', ['uses' => 'AuthController@login', 'as' => 'login']);

    Route::get('authenticate', ['uses' => 'AuthController@authenticate']);
});

/*
 * API ROUTES
 *
 * TODO: Currently being refactored (moving to api.php routes)
 */

Route::middleware(['auth'])->prefix('api')->namespace('Api')->group(function () {

    Route::prefix('users')->group(function() {
        Route::any('', 'UsersApiController@api');
    });

    Route::prefix('twitch')->group(function() {
        Route::any('', 'TwitchApiController@api');
    });

    Route::prefix('reqplaylist')->group(function() {
        Route::any('', 'RequestedSongsApiController@api');
    });

    Route::prefix('livechannels')->group(function() {
        Route::any('', 'TwitchApiController@api');
    });

    Route::prefix('regulars')->group(function() {
        Route::any('', 'RegularsApiController@api');
    });

    Route::prefix('playlists')->group(function() {
        Route::any('', 'Playlists\PlaylistsApiController@api');
    });

    Route::prefix('songs')->group(function() {
        Route::any('', 'Playlists\SongsApiController@api');
    });
});