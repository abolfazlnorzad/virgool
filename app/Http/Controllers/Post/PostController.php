<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function store(Request $request, ImageService $imageService)
    {
        $data = $request->only(['title', 'description', 'content']);
        $data['description'] = $data['description'] ?? Str::words($data['content'], 50, '...');
        $data['user_id'] = $request->user()->id;
        $data['image'] = $imageService->uploadPostImage(
            $request->img,
            $request->img_name,
            Post::getDir()
        );
        $post = Post::create($data);
        foreach ($request->categories as $category) {
            $categories = Category::firstOrCreate([
                'title' => $category
            ]);
        }
        $post->categories()->save($categories);


        return response(['data' => 'ok'], 200);
    }
}
