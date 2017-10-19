<?php

/**
 * Web Routes
 */
Route::middleware(['web', 'auth'])->prefix('playlists')->namespace('Modules\Playlists\Http\Controllers')->group(function() {
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
        Route::get('/', 'ApiReqSongsController@getAll')->name('reqsongs.getall');
        Route::post('/', 'ApiReqSongsController@addReqSong')->name('reqsongs.addreqsongs');
        Route::put('/', 'ApiReqSongsController@updateReqSong')->name('reqsongs.updatereqsongs');
        Route::patch('/', 'ApiReqSongsController@updateReqSong')->name('reqsongs.updatereqsongs');
        Route::delete('/{id}', 'ApiReqSongsController@deleteReqSong')->name('reqsongs.deletereqsongs');
    });

    Route::prefix('api/songs')->group(function() {
        Route::get('/', 'ApiSongsController@getAll')->name('songs.getall');
        Route::post('/', 'ApiSongsController@addSong')->name('songs.addreqsongs');
        Route::put('/', 'ApiSongsController@updateSong')->name('songs.updatereqsongs');
        Route::patch('/', 'ApiSongsController@updateSong')->name('songs.updatereqsongs');
        Route::delete('/{id}', 'ApiSongsController@deleteSong')->name('songs.deletereqsongs');
    });


});
