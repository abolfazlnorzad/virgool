<?php


namespace App\Traits;


use Illuminate\Support\Str;

trait SearchableTrait
{
    public function scopeSearch($query, $search = 'search')
    {

        foreach (static::$search as $filter) {
            if (Str::of($filter)->contains('.')) {
                $rel = Str::beforeLast($filter, '.');
                $field_name = Str::afterLast($filter, '.');
                $query->orWhereHas($rel, function ($q) use ($search, $field_name) {
                    return $q->where($field_name, 'LIKE', "%" . request()->{$search} . "%");
                });
                continue;
            }
            $query->orWhere($filter, 'LIKE', "%" . request()->{$search} . "%");

        }

        return $query;
    }
}
