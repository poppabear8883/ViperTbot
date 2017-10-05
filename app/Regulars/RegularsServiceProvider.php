<?php

namespace App\Regulars;

use App\Regulars\Contracts\RegularsInterface;
use App\Regulars\Repositories\RegularsRepository;
use Illuminate\Support\ServiceProvider;

class RegularsServiceProvider extends ServiceProvider
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
        $this->app->singleton(RegularsInterface::class, RegularsRepository::class);
    }
}
