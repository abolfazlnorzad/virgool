<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Models\Category;
use App\Models\Post;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function store(PostRequest $request)
    {

        $data = $request->only([
            'title', 'content', 'description',
            'user_id', 'image','min_read',
        ]);


        $post = Post::create($data);
        $select = Category::whereIn('title', $request->categories)->get();
        $create = collect($request->categories)->diff($select->pluck('title'));

        $categories = [];
        foreach ($create as $category) {
            $categories [] = Category::firstOrCreate([
                'title' => $category
            ]);
        }
        $post->categories()->attach(
            collect($categories)->pluck('id')->concat($select->pluck('id'))
    );


        return response(['data' => $post], 200);
    }
}
