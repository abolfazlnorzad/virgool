<?php

namespace App\Models;

use App\Traits\FieldHeaderTrait;
use App\Traits\OrderableTraits;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    use HasFactory,SearchableTrait,FieldHeaderTrait,OrderableTraits;

    protected $guarded = [];


    public static $FIELDS = [
        'title' => 'عنوان',
        'user.username' => 'اسم کاربر',
        'created_at' => 'تاریخ ساخت'

    ];

    public static $search = [
        'title',
        'user.username'
    ];


    public function scopeOrderUserByUsername($query, $orderType = 'asc')
    {
        return $query->orderBy(User::select('username')
            ->whereColumn(
                'users.id', 'drafts.user_id'),
            $orderType
        );
    }


    public function getRouteKeyName()
    {
        return 'link';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
