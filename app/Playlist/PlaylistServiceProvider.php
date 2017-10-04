<?php

namespace App\Playlist;

use Alaouy\Youtube\Youtube;
use App\Playlist\Contracts\PlaylistInterface as PlaylistInterface;
use App\Playlist\Contracts\SongInterface;
use App\Playlist\Repositories\PlaylistRepository;
use App\Playlist\Repositories\SongRepository;
use Illuminate\Support\ServiceProvider;

class PlaylistServiceProvider extends ServiceProvider
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
        $this->app->singleton(PlaylistInterface::class, PlaylistRepository::class);
        $this->app->singleton(SongInterface::class, SongRepository::class);

        $this->app->when(Youtube::class)
            ->needs('$key')
            ->give(config('youtube.key'));
    }
}
