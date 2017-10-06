<?php

namespace App\Playlists\Providers;

use Alaouy\Youtube\Youtube;
use App\Playlists\Contracts\PlaylistsInterface;
use App\Playlists\Contracts\RequestedSongsInterface;
use App\Playlists\Contracts\SongsInterface;
use App\Playlists\Repositories\PlaylistsRepository;
use App\Playlists\Repositories\RequestedSongsRepository;
use App\Playlists\Repositories\SongsRepository;
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
            PlaylistsInterface::class,
            PlaylistsRepository::class
        );

        $this->app->singleton(
            SongsInterface::class,
            SongsRepository::class
        );

        $this->app->singleton(
            RequestedSongsInterface::class,
            RequestedSongsRepository::class
        );


        $this->app->when(Youtube::class)
            ->needs('$key')
            ->give(config('youtube.key'));
    }
}
