<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class SearchPostController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'posts' => Post::where('title', 'LIKE', "%{$request->q}%")
                ->orWhere('content', 'LIKE', "%{$request->q}%")
                ->with(['user', 'categories'])
                ->withCount('likes')
                ->simplePaginate(10)
        ], 200);

    }
}
