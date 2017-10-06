<?php

namespace App\Providers;

use App\Twitch\TwitchApi;
use App\ViewComposers\AllViewsComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function boot()
    {
        // Using class based composers...
        View::composer(
            '*', AllViewsComposer::class
        );

        // Using Closure based composers...
        /*View::composer('dashboard', function ($view) {
            //
        });*/
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}