<?php


namespace App\Traits;


trait FieldHeaderTrait
{


    public static function getHeaderFildes()
    {
        return collect(static::$FIELDS)->transform(function ($item, $key) {
            return
                [
                    'text' => $item,
                    'value' => $key,
                ];
        })->values()->all();
    }

}
