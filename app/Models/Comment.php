<?php

namespace App\Models;

use App\Traits\FieldHeaderTrait;
use App\Traits\OrderableTraits;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory, SearchableTrait, OrderableTraits, FieldHeaderTrait;

    protected $guarded = [];

    protected $with = ['replies', 'user'];


    public static $FIELDS = [

        'content' => 'نظر',
        'post.title' => 'عنوان پست',
        'user.username' => 'نام کاربری',
        'parent.content' => 'پاسخ',
        'created_at' => 'تاریخ ساخت',
        'link' => ''

    ];


    public static $search = [
        'content',
        'post.title',
        'parent.content',
        'user.username'
    ];


    public function scopeOrderPostByTitle($query, $orderType = 'asc')
    {
            return $query->orderBy(Post::select('title')->whereColumn('comments.post_id','posts.id'),$orderType);
    }

    public function scopeOrderUserByUsername($query, $orderType = 'asc')
    {
        return $query->orderBy(User::select('username')->whereColumn('comments.user_id','users.id'),$orderType);
    }

    public function scopeOrderParentByContent($query, $orderType = 'asc')
    {
        return $query->orderBy(Comment::select('content')->whereColumn('comments.parent_id','comments.id'),$orderType);
    }


    public static function booted()
    {
        static::saving(function ($comment) {
            $comment->user_id = request()->user()->id;
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function parent()
    {
        return $this->belongsTo(Comment::class,'comment_id');
    }

    public function replies()
    {
        return $this->hasMany(Comment::class);
    }


}
