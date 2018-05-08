<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Contracts\Points\{ 
    CategoryRepository
};
use App\Repositories\Eloquent\Points\{ 
    EloquentCategoryRepository
};

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(CategoryRepository::class, EloquentCategoryRepository::class);
    }
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}