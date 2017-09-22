<?php
namespace App\Twitch\Providers;

use Illuminate\Support\ServiceProvider;

class ApiServiceProvider extends ServiceProvider
{
    // Register service provider
    public function register()
    {
        $this->app->bind(
            \App\Twitch\TwitchApi::class,
            \App\Twitch\TwitchApi::class
        );
    }

    // Boot
    public function boot()
    {
        //
    }

}