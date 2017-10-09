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

    Route::get('/', 'PagesController@dashboard');

    Route::get('applications', 'PagesController@applications');

    Route::get('logout', function() {
        \Auth::logout();
        return redirect('login');
    });

    Route::prefix('users')->group(function () {
        Route::any('', 'UsersController@index');
    });

    Route::prefix('playlists')->group(function () {
        Route::any('', 'PlaylistsController@index');
    });

    Route::prefix('regulars')->group(function () {
        Route::any('', 'RegularsController@index');
    });

    /*Route::prefix('commands')->group(function () {
        Route::any('', 'CommandsController@index');
    });*/
});

Route::middleware(['guest'])->group(function () {
    Route::get('login', ['uses' => 'AuthController@login', 'as' => 'login']);

    Route::get('authenticate', ['uses' => 'AuthController@authenticate']);
});