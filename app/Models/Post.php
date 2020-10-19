<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory, Sluggable;

    protected $guarded = [];
    protected $appends = ['cate',];

    public static function getDir()
    {
        return public_path('/images/posts/');
    }


    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]

        ];
    }


    public function getCateAttribute()
    {
        return $this->categories->pluck('title');
    }


    public function getImageAttribute()
    {
        return '/images/posts/' . $this->attributes['image'];
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
