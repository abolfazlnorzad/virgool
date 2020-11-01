<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserPostController extends Controller
{
    public function index(User $user)
    {
        $posts = $user->posts()->withCount('likes')->with(['user', 'categories'])->simplePaginate(7);
        return response([
            'posts' => $posts,
            'user' => $user->loadCount('posts')
        ], 200);
    }
}
