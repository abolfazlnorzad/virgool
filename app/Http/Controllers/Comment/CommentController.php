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
            $comment->load(['user', 'post', 'replies', 'parent'])
        ));
        return response([
            'data' => $comment
        ], 200);

    }


    public function destroy(Comment $comment)
    {
        $this->authorize('destroy', $comment);

        $comment->delete();

        return response([
            'data' => 'ok'
        ],200);


    }


    public function update(Request $request, Comment $comment)
    {
        $this->authorize('destroy', $comment);

        $request->validate(['content' => 'required']);

        $comment->update($request->only('content'));

        return response([
            'data' => $comment->load(['user', 'post', 'replies', 'parent'])
        ],200);


    }

}
