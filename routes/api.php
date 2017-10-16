<?php

Route::middleware('auth:api')->group(function () {

    Route::prefix('playlists')->namespace('Api')->group(function () {
        Route::get('/', 'ApiPlaylistsController@getAll')->name('playlists.getall');
        Route::post('/', 'ApiPlaylistsController@addPlaylist')->name('playlists.addplaylist');
        Route::put('/', 'ApiPlaylistsController@updatePlaylist')->name('playlists.updateplaylist');
        Route::patch('/', 'ApiPlaylistsController@updatePlaylist')->name('playlists.updateplaylist');
        Route::delete('/{id}', 'ApiPlaylistsController@deletePlaylist')->name('playlists.deleteplaylist');
        Route::get('youtube/search', 'ApiPlaylistsController@searchYoutube')->name('playlists.youtube.search');
        Route::get('youtube/playlist', 'ApiPlaylistsController@playlistContent')->name('playlists.youtube.playlist');
    });
    
    Route::resource('users', 'UsersController');
    //Route::resource('playlists', 'PlaylistsController');
    Route::resource('regulars', 'RegularsController');
    Route::resource('songs', 'SongsController');
    Route::resource('requestedsongs', 'RequestedSongsController');

    Route::prefix('twitch')->group(function () {
        Route::get('livechannels', 'TwitchController@liveChannels');
        Route::get('authchannel', 'TwitchController@authChannel');
        Route::put('updatechannel', 'TwitchController@updateChannel');
    });

    Route::get('user', 'UsersController@user');
});