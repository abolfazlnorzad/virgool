<?php

namespace App\Http\Controllers\Comment;

use App\Events\ReplyCreatedEvent;
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
        event(new ReplyCreatedEvent(
            $reply->load(['user', 'post', 'replies', 'parent'])
        ));

        return response([
            'data' => $reply
        ],200);

    }
}
