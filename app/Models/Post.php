<?php

namespace App\Models;

use App\Traits\FieldHeaderTrait;
use App\Traits\OrderableTraits;
use App\Traits\SearchableTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory, Sluggable, FieldHeaderTrait, OrderableTraits, SearchableTrait;




    protected $guarded = [];
    protected $appends = ['cate', 'is_bookmarked', 'is_liked'];

    public static function getDir()
    {
        return public_path('/images/posts/');
    }


    public static $FIELDS = [
        'image' => 'تصویر شاخص پست',
        'title' => 'عنوان',
        'user.username' => 'اسم کاربر',
        'link' => ''

    ];




    public static $search = [
        'title',
        'user.username'
    ];

    public function scopeOrderUserByUsername($query, $orderType = 'asc')
    {
        return $query->orderBy(User::select('username')
            ->whereColumn(
                'users.id', 'posts.user_id'),
            $orderType
        );
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

    public function bookmarks()
    {
        return $this->belongsToMany(User::class, 'bookmarks');
    }

    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes');
    }

    public function getIsBookmarkedAttribute()
    {
        return $this->bookmarks()->where('user_id', optional(request()->user())->id)->exists();
    }

    public function getIsLikedAttribute()
    {
        return $this->likes()->where('user_id', optional(request()->user())->id)->exists();
    }


}
