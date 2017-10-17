<?php

Route::middleware('auth:api')->group(function () {
    
    Route::resource('users', 'UsersController');

    Route::prefix('twitch')->group(function () {
        Route::get('livechannels', 'TwitchController@liveChannels');
        Route::get('authchannel', 'TwitchController@authChannel');
        Route::put('updatechannel', 'TwitchController@updateChannel');
    });

    Route::get('user', 'UsersController@user');
});