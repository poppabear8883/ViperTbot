<?php

Route::middleware('auth:api')->group(function () {
    
    Route::resource('users', 'UsersController');

    Route::prefix('twitch')->group(function () {
        Route::get('channel', 'TwitchController@channel');
        Route::get('livechannels', 'TwitchController@liveChannels');
        Route::get('following', 'TwitchController@following');
        Route::get('isfollowing', 'TwitchController@isFollowing');
        Route::get('followers', 'TwitchController@followers');
        Route::get('authchannel', 'TwitchController@authChannel');
        Route::put('updatechannel', 'TwitchController@updateChannel');
    });

    Route::get('user', 'UsersController@user');
});