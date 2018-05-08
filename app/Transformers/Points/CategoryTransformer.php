<?php

namespace App\Transformers\Points;

use App\Models\Points\Category;

class CategoryTransformer extends \League\Fractal\TransformerAbstract
{
    public function transform(Category $category)
    {
        return [
            'id' => $category->id,
            'name' => $category->name,
        ];
    }
}