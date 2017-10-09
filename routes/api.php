<?php

Route::middleware('auth:api')->group(function () {

    Route::resource('users', 'UsersController');
    Route::resource('playlists', 'PlaylistsController');
    Route::resource('regulars', 'RegularsController');
    Route::resource('songs', 'SongsController');

    Route::prefix('twitch')->group(function () {
        Route::get('livechannels', 'TwitchController@liveChannels');
        Route::get('authchannel', 'TwitchController@authChannel');
        Route::put('updatechannel', 'TwitchController@updateChannel');
    });

    Route::get('user', 'UsersController@user');

    Route::get(
        'playlists/youtube/search',
        'PlaylistsController@searchYoutube'
    );
});