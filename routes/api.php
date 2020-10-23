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

Route::post('/post', 'Post\PostController@store')->middleware('auth:sanctum');
Route::get('/posts/all-posts', 'Post\AllUserPostsController')->middleware('auth:sanctum');
Route::get('/posts/all-drafts', 'Post\AllUserDraftsController')->middleware('auth:sanctum');
Route::get('/posts/{post:slug}/edit', 'Post\PostController@show')
    ->name('show.post')
    ->middleware('auth:sanctum');

Route::patch('/posts/{post:slug}/edit', 'Post\PostController@edit')
    ->name('edit.post')
    ->middleware('auth:sanctum');

Route::patch('/posts/{post:slug}', 'Post\PostController@update')
    ->name('update.post')
    ->middleware('auth:sanctum');

Route::delete('/posts/{post:slug}/delete', 'Post\PostController@destroy')
    ->name('destroy.post')
    ->middleware('auth:sanctum');

Route::delete('/drafts/{draft:link}/delete', 'Draft\DraftController@destroy')
    ->name('destroy.draft')
    ->middleware('auth:sanctum');

Route::post('/bookmarks/{post:slug}', 'Post\BookmarkController@store')
    ->name('bookmark.store')->middleware('auth:sanctum');

Route::delete('/bookmarks/{post:slug}', 'Post\BookmarkController@destroy')
    ->name('bookmark.destroy')->middleware('auth:sanctum');



Route::post('/likes/{post:slug}', 'Post\LikeController@store')
    ->name('like.store')->middleware('auth:sanctum');

Route::delete('/likes/{post:slug}', 'Post\LikeController@destroy')
    ->name('like.destroy')->middleware('auth:sanctum');


Route::post('/follows/{user:username}', 'User\FollowController')
    ->name('follow')->middleware('auth:sanctum');



Route::get('/posts/{post:slug}', 'Post\ShowPostController')->name('show-post');

Route::post('/comments/{post:slug}', 'Comment\CommentController@store')
    ->name('comment.store');

Route::post('/replies/{post:slug}', 'Comment\ReplyController@store')
    ->name('reply.store');
Route::delete('/comments/{comment}', 'Comment\CommentController@destroy')
    ->name('destroy.comment');
Route::patch('/comments/{comment}', 'Comment\CommentController@update')
    ->name('update.comment');
