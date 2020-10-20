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


    public static function booted()
    {
        static::saving(function ($post) {
            $post->short_link = Str::random(7);
        });

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

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function parentComments()
    {
        return $this->comments()->whereNull('comment_id');
    }


}
