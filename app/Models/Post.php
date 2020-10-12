<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory,Sluggable;

    protected $guarded=[];

    public static function  getDir()
    {
        return public_path('/images/posts/');
    }


    public function sluggable(): array
    {
        return [
            'slug'=>[
                'source'=>'title'
            ]

        ];
    }


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }


}
