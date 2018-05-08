<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repositories\Contracts\Points\{ 
    CategoryRepository,
    PointRepository
};
use App\Repositories\Eloquent\Points\{ 
    EloquentCategoryRepository,
    EloquentPointRepository
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
        $this->app->bind(PointRepository::class, EloquentPointRepository::class);
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