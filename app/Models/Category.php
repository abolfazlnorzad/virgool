<?php

namespace App\Models;

use App\Traits\FieldHeaderTrait;
use App\Traits\OrderableTraits;
use App\Traits\SearchableTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, Sluggable,FieldHeaderTrait,OrderableTraits,SearchableTrait;

    protected $guarded = [];

    public static $FIELDS = [
        'title' => 'عنوان',
        'created_at' => 'تاریخ ساخت',
        'link'=>'',
        'actions'=>'',

    ];

    public static $search = [
        'title',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

}
