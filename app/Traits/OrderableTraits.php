<?php


namespace App\Traits;



trait OrderableTraits
{

    public function scopeSortFromRequest($query, $order_By = 'sort_by', $order_Type = 'sort_type')
    {
        $users_feilds = collect(static::$FIELDS);
        $sort_by = $users_feilds->keys()->contains(request()->{$order_By}) ? request()->{$order_By} : 'id';
        $sort_type = request()->{$order_Type} == 'asc' ? 'asc' : 'desc';

        return $query->orderBy($sort_by, $sort_type);

    }


}
