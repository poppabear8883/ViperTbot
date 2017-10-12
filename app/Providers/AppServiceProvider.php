<?php

namespace App\Providers;

use App\Console\Commands\PivotMigrationMakeCommand;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
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
        $this->app->register(\L5Swagger\L5SwaggerServiceProvider::class);

        $this->app->singleton('command.migrate.pivot', function ($app) {
            return $app[PivotMigrationMakeCommand::class];
        });
        $this->commands('command.migrate.pivot');
    }
}
