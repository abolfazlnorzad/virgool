<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    public static function  getDir()
    {
        return public_path('/images/posts/');
    }

    public static function setName($image)
    {
        return Str::random(7) . '.' . $image->getClientOriginalExtension();
    }


}
