<?php


namespace App\Traits;


trait FieldHeaderTrait
{


    public static function getHeaderFildes()
    {
        return collect(static::$FIELDS)->transform(function ($item, $key) {
            $sortable = $key == 'link' || $key == 'actions' || $key == 'image' ? false : true;
            return
                [
                    'text' => $item,
                    'value' => $key,
                    'sortable' => $sortable
                ];
        })->values()->all();
    }

}
