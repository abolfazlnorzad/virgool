<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return $request->user();
});

Route::post('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::patch('/profile', 'ProfileUpdateController@update')
    ->middleware('auth:sanctum')
    ->name('profile.update');

Route::post('/upload-post-image', 'Post\UploadPostImageController')
    ->middleware('auth:sanctum')
    ->name('upload-post-image');
Route::post('/posts/create', 'Draft\DraftController@store')
    ->name('posts.store')
    ->middleware('auth:sanctum');
Route::patch('/drafts/{draft}', 'Draft\DraftController@update')
    ->name('draft.update')
    ->middleware('auth:sanctum');
Route::get('/drafts/{draft}', 'Draft\DraftController@show')
    ->name('draft.show')
    ->middleware('auth:sanctum');
