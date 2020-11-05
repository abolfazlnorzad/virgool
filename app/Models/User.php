<?php

namespace App\Models;

use App\Traits\FieldHeaderTrait;
use App\Traits\OrderableTraits;
use App\Traits\SearchableTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use phpDocumentor\Reflection\Types\Static_;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, OrderableTraits, FieldHeaderTrait, SearchableTrait;

    protected $guarded = [];

    protected $appends = [
        'profile_src',
        'image'
    ];

    public static $FIELDS = [
        'image' => 'پروفایل',
        'name' => 'نام',
        'email' => 'ایمیل',
        'username' => 'نام کاربری',
        'posts_count' => 'تعداد پست ها',
        'created_at' => 'تاریخ ساخت',
        'actions' => 'عملیات',
        'link' => '',
    ];
    public static $search = [
        'name',
        'email',
        'username'

    ];


    public function getAllRoleIdAttribute()
    {
        return $this->roles->pluck('id');
    }

    public function getImageAttribute()
    {
        return $this->profile_src;
    }

    public static function booted()
    {
        static::deleting(function ($user) {
            $user->drafts()->delete();
        });
    }


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected
        $hidden = [
        'password',
        'remember_token',
    ];


    public function getProfileSrcAttribute()
    {
        return '/profiles/' . $this->profile;
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected
        $casts = [
        'email_verified_at' => 'datetime',
    ];

    public
    function drafts()
    {
        return $this->hasMany(Draft::class);
    }

    public
    function posts()
    {
        return $this->hasMany(Post::class);
    }

    public
    function follows()
    {
        return $this->belongsToMany(User::class, 'follows', 'user_id', 'following_id');
    }

    public
    function followers()
    {
        return $this->belongsToMany(User::class, 'follows', 'following_id', 'user_id');
    }

    public
    function getIsFollowsAttribute()
    {
        return $this->followers()->where('user_id', optional(request()->user())->id)->exists();
    }

    public
    function bookmarks()
    {
        return $this->belongsToMany(Post::class, 'bookmarks');
    }

    public
    function likes()
    {
        return $this->belongsToMany(Post::class, 'likes');
    }


    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole($roles)
    {
        foreach ($roles as $role) {
            if ($this->roles()->pluck('name')->contains($role))
                return true;
        }
        return false;
    }

}
