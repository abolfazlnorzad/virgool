<?php

use Illuminate\Support\Facades\Route;


Route::fallback(function () {
    return view('home');
});

//Auth::routes();
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/register', 'Auth\RegisterController@register')->name('register');
