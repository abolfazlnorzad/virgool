<?php


namespace App\Services;


use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ImageService
{

    /**
     * @param $image
     * @param $file_dir
     * @param null $file_name
     * @return string
     */
    public function uploadImageFile($image,$file_dir ,$file_name = null)
    {
        $image_name = $file_name ?? $this->setName($image);
        $image_dir = $file_dir ;
        $image->move($image_dir, $image_name);
        return $image_name;
    }


    public function setName($image)
    {
        return Str::random(7) . '.' . $image->getClientOriginalExtension();
    }


}
