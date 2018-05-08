<?php

namespace App\Http\Controllers\Webapi\Points;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Repositories\Contracts\Points\PointRepository;

use App\Transformers\Points\PointTransformer;
use App\Http\Requests\Points\StorePointRequest;

class PointController extends Controller
{
    protected $points;

    public function __construct(PointRepository $points)
    {
        $this->points = $points;
    }

    public function index()
    {
        $points = $this->points->with(['category'])->get();

        return fractal()
            ->collection($points)
            ->parseIncludes(['category'])
            ->transformWith(new PointTransformer)
            ->toArray();
    }

    public function store(StorePointRequest $request)
    {
        return $this->points->store($request->all());
    }
}
