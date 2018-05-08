<?php

namespace App\Repositories\Eloquent\Points;

use App\Repositories\EloquentRepositoryAbstract;
use App\Repositories\Contracts\Points\PointRepository;

use App\Models\Points\Point;

class EloquentPointRepository extends EloquentRepositoryAbstract implements PointRepository
{
    public function entity()
    {
        return Point::class;
    }

    public function store($data)
    {
        $this->entity->position = $data['position'];
        $this->entity->category_id = $data['category'];
        $this->entity->save();

        return $this->entity;
    }
}