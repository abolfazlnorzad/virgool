<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class ShowPostController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Post $post)
    {
        $related_post = Post::
        with('user')
            ->where('id', '!=', $post->id)
            ->whereHas('categories', function ($query) use ($post) {
                $query->whereIn('categories.id', $post->categories->pluck('id'));

            })->inRandomOrder()->take(3)->get();

        return response([

            'post' => $post->load(['user', 'categories']),

            'related_post' => $related_post

        ], 200);
    }
}
