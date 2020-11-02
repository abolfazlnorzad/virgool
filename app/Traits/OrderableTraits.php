<?php


namespace App\Traits;


use Illuminate\Support\Str;

trait OrderableTraits
{

    public function scopeSortFromRequest($query, $order_By = 'sort_by', $order_Type = 'sort_type')
    {
        $users_feilds = collect(static::$FIELDS);
        $sort_by = $users_feilds->keys()->contains(request()->{$order_By}) ? request()->{$order_By} : 'id';
        $sort_type = request()->{$order_Type} == 'asc' ? 'asc' : 'desc';

        if (Str::of($sort_by)->contains('.')) {
            $rel = Str::of($sort_by)->beforeLast('.')->ucfirst();
            $field_name = Str::of($sort_by)->afterLast('.')->ucfirst();
            $methodName = "order{$rel}By{$field_name}";
            return $query->{$methodName}($sort_type);
        }

        return $query->orderBy($sort_by, $sort_type);

    }


}
