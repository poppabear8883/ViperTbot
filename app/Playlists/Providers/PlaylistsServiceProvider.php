<?php

namespace App\Playlists\Providers;

use Alaouy\Youtube\Youtube;
use App\Playlists\Contracts\PlaylistInterface as PlaylistInterface;
use App\Playlists\Contracts\RequestedSongInterface;
use App\Playlists\Contracts\SongInterface;
use App\Playlists\Repositories\PlaylistRepository;
use App\Playlists\Repositories\RequestedSongRepository;
use App\Playlists\Repositories\SongRepository;
use App\Playlists\RequestedSong;
use Illuminate\Support\ServiceProvider;

class PlaylistsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->singleton(
            PlaylistInterface::class,
            PlaylistRepository::class
        );

        $this->app->singleton(
            SongInterface::class, 
            SongRepository::class
        );

        $this->app->singleton(
            RequestedSongInterface::class,
            RequestedSongRepository::class
        );


        $this->app->when(Youtube::class)
            ->needs('$key')
            ->give(config('youtube.key'));
    }
}
