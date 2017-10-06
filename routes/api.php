<?php

Route::middleware('auth:api')->group(function () {
    Route::resource('users', 'UsersController');
    Route::resource('playlists', 'PlaylistsController');
    Route::resource('regulars', 'RegularsController');
    Route::resource('songs', 'SongsController');
});