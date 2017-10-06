<?php

namespace App\Users\Providers;

use App\Users\Contracts\UsersInterface;
use App\Users\Repositories\UsersRepository;
use Illuminate\Support\ServiceProvider;

class UsersServiceProvider extends ServiceProvider
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
        $this->app->singleton(UsersInterface::class, UsersRepository::class);
    }
}
