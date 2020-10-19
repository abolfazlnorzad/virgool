<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Requests\UpdatePostDataRequest;
use App\Models\Category;
use App\Models\Post;


class PostController extends Controller
{
    public function store(PostRequest $request)
    {

        $data = $request->only([
            'title', 'content', 'description',
            'user_id', 'image', 'min_read',
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

    public function show(Post $post)
    {
        $this->authorize('view', $post);
        return $post->append('cate');
    }

    public function edit(UpdatePostDataRequest $request, Post $post)
    {
        $post = $post->update($request->validated());
        return $post;
    }

    public function update(PostRequest $request, Post $post)
    {

        $data = $request->only([
            'title', 'content', 'description',
            'user_id', 'image', 'min_read',
        ]);
        if (!isset($data['image_name'])) {
            unset($data['image']);
        }
        $post->update($data);
        $this->createPostCategories($request, $post);
        return response(['data' => $post], 200);
    }

    /**
     * @param PostRequest $request
     * @param Post $post
     */
    public function createPostCategories(PostRequest $request, Post $post): void
    {
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
    }

    public function destroy(Post $post)
    {
        $this->authorize('view', $post);
        $post->delete();
        return response([
            'data' => 'ok'
        ], 200);
    }


}
