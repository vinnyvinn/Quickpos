<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Auth::routes();
Route::view('/','home');
Route::view('/{any}','home');
//Route::view('/dashboard','layouts.dashboard');
//
//Route::resource('products','ProductController');
//Route::resource('categories','CategoryController');
//Route::resource('orders','OrderController');

