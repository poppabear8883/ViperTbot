<?php
/**
 * Web Routes
 */

Route::middleware(['web'])->group(function() {
    Route::get('/', function() {
        return redirect('/dashboard');
    });
});

Route::middleware(['web', 'auth'])->prefix('dashboard')->namespace('Modules\Dashboard\Http\Controllers')->group(function() {
    Route::get('/', 'DashboardController@index');
});

/**
 * API Routes
 */
Route::middleware(['api','auth:api'])->namespace('Modules\Dashboard\Http\Controllers\Api')->group(function () {

    Route::prefix('api/dashboard')->group(function() {
//        Route::get('/', 'ApiPlaylistsController@getAll')->name('playlists.getall');
//        Route::post('/', 'ApiPlaylistsController@addPlaylist')->name('playlists.addplaylist');
//        Route::put('/', 'ApiPlaylistsController@updatePlaylist')->name('playlists.updateplaylist');
//        Route::patch('/', 'ApiPlaylistsController@updatePlaylist')->name('playlists.updateplaylist');
//        Route::delete('/', 'ApiPlaylistsController@deletePlaylist')->name('playlists.deleteplaylist');
    });

});