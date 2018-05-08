<?php

namespace App\Models\Points;

use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    public function getPositionAttribute($value)
    {
        $point = $this->selectRaw(('ST_X(position) AS lat, 
            ST_Y(position) AS lng'))->where('id', $this->id)->first();

        return [
            'lat' => $point->lat,
            'lng' => $point->lng
        ];
    }
}
