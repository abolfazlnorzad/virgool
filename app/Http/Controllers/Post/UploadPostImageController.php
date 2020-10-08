<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Facades\App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UploadPostImageController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'file' => ['required', 'image']
        ]);



        $image_name = ImageService::uploadImageFile(
            $request->file('file'),
            Post::getDir()
        );

        return response([
            'data' => '/images/posts/'.$image_name
        ]);


    }

}
