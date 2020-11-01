<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class NavbarCategoryController extends Controller
{
    public function index()
    {
        $category = Category::inRandomOrder()->take(7)->get();
        return response([
            'data'=>$category
        ],200);
    }
}
