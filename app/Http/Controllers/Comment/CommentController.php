<?php

namespace App\Http\Controllers\Comment;

use App\Events\CommentCreatedEvent;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;

class CommentController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $request->validate(['content' => 'required']);

        $post->comments()->save(
            $comment = new Comment($request->only('content'))
        );

        event(new CommentCreatedEvent(
           $comment->load(['user','post','replies','parent'])
        ));
        return response([
            'data' => $comment
        ], 200);

    }
}
