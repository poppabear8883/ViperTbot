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

Route::get('/', 'InterfaceController@index')->middleware('auth');

Route::get('login', ['uses' => 'AuthController@login', 'as' => 'login']);

Route::get('authenticate', ['uses' => 'AuthController@authenticate']);

Route::get('logout', function() {
    \Auth::logout();
    return redirect('login');
});

/*
 * API ROUTES
 */

Route::middleware(['auth'])->prefix('api')->namespace('Api')->group(function () {

        Route::prefix('playlist')->group(function() {
            Route::any('', 'PlaylistApiController@api');
        });

        /*Route::prefix('reqplaylist')->group(function() {
            Route::any('', 'ReqPlaylistApiController@api');
        });*/

});