<?php

namespace App\Repositories\Eloquent\Points;

use App\Repositories\EloquentRepositoryAbstract;
use App\Repositories\Contracts\Points\CategoryRepository;

use App\Models\Points\Category;

class EloquentCategoryRepository extends EloquentRepositoryAbstract implements CategoryRepository
{
    public function entity()
    {
        return Category::class;
    }
}