<?php

namespace App\Providers;

use App\Playlist\Contracts\PlaylistInterface as PlaylistInterface;
use App\Playlist\Repositories\PlaylistRepository;
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
    }
}
