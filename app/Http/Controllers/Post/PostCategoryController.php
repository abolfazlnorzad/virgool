<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{

    public function index(Category $category)
    {
        $posts =$category->posts()->with(['user','categories'])->withCount('likes')->simplePaginate();
        return response([
            'posts'=> $posts,
            'category'=>$category->loadCount('posts')
        ],200);
    }

}
