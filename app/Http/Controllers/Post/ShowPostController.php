<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class ShowPostController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Post $post
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

        $post->load(['user', 'categories', 'parentComments'])
            ->loadCount(['comments', 'likes'])
            ->append('is_liked');
        $post->user->append('is_follows');

       Redis::zincrby('trending-posts',1, $post->id );

        return response([
            'post' => $post,
            'related_post' => $related_post
        ], 200);
    }
}
