<?php

namespace App\Models;

use App\Traits\FieldHeaderTrait;
use App\Traits\OrderableTraits;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory,FieldHeaderTrait,OrderableTraits,SearchableTrait;
    protected $guarded=[];


    public static $FIELDS = [

        'name' => 'نام نقش ',
        'created_at'=>'تاریخ ساخت',
        'actions'=>''

    ];
    public static $search = [
        'name',
    ];


    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
