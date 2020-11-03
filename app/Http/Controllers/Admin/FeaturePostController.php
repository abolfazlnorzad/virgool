<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FeaturePost;
use App\Models\Post;
use Illuminate\Http\Request;

class FeaturePostController extends Controller
{

    public function index()
    {
        return response([
            'posts' => FeaturePost::with(['post.user'])->get()
        ], 200);
    }


    public function store(Post $post)
    {

        $post->featurePost()->firstOrCreate([]);
        return response([
            'data' => 'ok'
        ], 200);
    }

    public function destroy(Post $post)
    {
        $post->featurePost()->delete();
        return response(['data' => 'ok'], 200);
    }


}
