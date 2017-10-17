<?php

/**
 * Web Routes
 */
Route::middleware('web')->prefix('playlists')->namespace('Modules\Playlists\Http\Controllers')->group(function() {
    Route::get('/', 'PlaylistsController@index');
});

/**
 * API Routes
 */
Route::middleware(['api','auth:api'])->namespace('Modules\Playlists\Http\Controllers\Api')->group(function () {

    Route::prefix('api/playlists')->group(function() {
        Route::get('/', 'ApiPlaylistsController@getAll')->name('playlists.getall');
        Route::post('/', 'ApiPlaylistsController@addPlaylist')->name('playlists.addplaylist');
        Route::put('/', 'ApiPlaylistsController@updatePlaylist')->name('playlists.updateplaylist');
        Route::patch('/', 'ApiPlaylistsController@updatePlaylist')->name('playlists.updateplaylist');
        Route::delete('/{id}', 'ApiPlaylistsController@deletePlaylist')->name('playlists.deleteplaylist');
        Route::get('youtube/search', 'ApiPlaylistsController@searchYoutube')->name('playlists.youtube.search');
        Route::get('youtube/playlist', 'ApiPlaylistsController@playlistContent')->name('playlists.youtube.playlist');
    });

    Route::prefix('api/reqsongs')->group(function() {
        Route::get('/', 'ApiPlaylistsController@getAllRequests')->name('playlists.getall');
    });


});
