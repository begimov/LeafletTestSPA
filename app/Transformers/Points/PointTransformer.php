<?php

namespace App\Transformers\Points;

use App\Models\Points\Point;

class PointTransformer extends \League\Fractal\TransformerAbstract
{
    protected $availableIncludes = ['category'];

    public function transform(Point $point)
    {
        return [
            'id' => $point->id,
            'position' => $point->position,
            'created_at' => $point->created_at->toDateTimeString()
        ];
    }

    public function includeCategory(Point $point)
    {
        return $this->item($point->category, new CategoryTransformer);
    }
}