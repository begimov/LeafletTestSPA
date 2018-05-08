<?php

namespace App\Models\Points;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public function setPositionAttribute($value)
    {
        $this->attributes['position'] = DB::raw("POINT({$value['lat']},{$value['lng']})");
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
