<?php

namespace App\Http\Controllers\Webapi\Points;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Repositories\Contracts\Points\PointRepository;

class PointController extends Controller
{
    protected $points;

    public function __construct(PointRepository $points)
    {
        $this->points = $points;
    }

    public function index()
    {
        //
    }
}
