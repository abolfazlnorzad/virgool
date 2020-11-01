<?php


namespace App\Traits;


trait SearchableTrait
{
    public function scopeSearch($query, $search = 'search')
    {
        foreach (static::$search as $filter)
            $query->orWhere($filter, 'LIKE', "%" . request()->{$search} . "%");
        return $query;
    }
}
