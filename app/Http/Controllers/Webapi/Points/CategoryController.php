<?php

namespace App\Http\Controllers\Webapi\Points;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Repositories\Contracts\Points\CategoryRepository;

use App\Transformers\Points\CategoryTransformer;

class CategoryController extends Controller
{
    protected $categories;

    public function __construct(CategoryRepository $categories)
    {
        $this->categories = $categories;
    }

    public function index()
    {
        $categories = $this->categories->get();

        return fractal()
            ->collection($categories)
            ->transformWith(new CategoryTransformer)
            ->toArray();
    }
}
