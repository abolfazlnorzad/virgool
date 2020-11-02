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
        $posts = collect(Redis::zrevrange('trending-posts', 0, 4))->map(function ($post) {
                return json_decode($post);
        });

        return response([
            'posts' => $posts
        ], 200);
    }
}
