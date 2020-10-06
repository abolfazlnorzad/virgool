<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::fallback(function () {
    return view('home');
});

//Auth::routes(['verify' => true]);
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/register', 'Auth\RegisterController@register')->name('register');
Route::post('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::get('/reset/password/{token}', function () {
    return view('home');
})->name('password.reset');


