<?php

namespace App\Http\Requests;

use App\Models\Post;
use App\Services\ImageService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required'],
            'content' => ['required'],
            'description' => ['nullable'],
            'image' => ['required'],
            'image_name' => ['required'],
            'categories' => ['required', 'array'],
            'categories.*' => ['required'],
        ];
    }

    public function passedValidation ()
    {
        $imageService = app(ImageService::class);
        $data = $this->all();
        $description = $data['description'] ?? Str::words($data['content'], 50, '...');

        $image = $imageService->uploadPostImage(
            $this->image,
            $this->image_name,
            Post::getDir()
        );

        $min_read =ceil(str_word_count(strip_tags($data['content'])) /250);

        return $this->merge([
            'user_id' => $this->user()->id,
            'description' => $description,
            'image' => $image,
            'min_read' => $min_read,
        ]);


    }


}
