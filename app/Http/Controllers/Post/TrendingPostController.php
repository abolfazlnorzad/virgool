<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class TrendingPostController extends Controller
{
    public function index()
    {
        $posts = collect(Redis::zrevrange('trending-posts', 0, 4));

        $posts->transform(function ($post) {
            return (Post::where('id', $post)->with('user')->first());
        });

//        $posts = $posts->filter(function ($value, $key) {
//
//            return $value != null;
//
//        });



        return response(['posts' => $posts,], 200);
    }
}
