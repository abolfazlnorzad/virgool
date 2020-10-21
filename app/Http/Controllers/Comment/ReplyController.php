<?php

namespace App\Http\Controllers\Comment;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $request->validate([
            'content' => 'required',
            'comment_id' => 'required|exists:comments,id',
        ]);

        $post->comments()->save(
            $reply = new Comment($request->only(['content', 'comment_id']))
        );

        return response([
            'data' => $reply
        ],200);

    }
}
