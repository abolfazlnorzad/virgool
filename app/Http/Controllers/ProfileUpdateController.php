<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ProfileUpdateController extends Controller
{
    public function update(ProfileRequest $request)
    {

        $data = $request->except(['profile_name','profile_src']);
        $extention = Str::afterLast($request->profile_name, '.');
        $file_name = $request->user()->username . '.' . $extention;

        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = Hash::make($data['password']);
        }
        $path = public_path('profiles/') . $file_name ;
        if ($request->profile && $request->profile_name) {
            Image::make($request->profile)
                ->fit(100)
                ->save($path);
            $data['profile'] = $file_name.'?'.Str::random(7);
        }

        $request->user()->update($data);
        return $request->user();

    }
}
