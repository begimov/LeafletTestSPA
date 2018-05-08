<?php

namespace App\Transformers\Points;

use App\Models\Points\Point;

class PointTransformer extends \League\Fractal\TransformerAbstract
{
    public function transform(Point $point)
    {
        return [
            'id' => $point->id,
            'position' => $point->position,
        ];
    }
}