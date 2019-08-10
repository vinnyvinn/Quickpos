<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('categories','CategoryController');
Route::apiResource('products','ProductController');
Route::get('dishes','ProductController@dishes');
Route::get('/dishes','DishesController@index');
Route::get('/drinks','DishesController@drinks');
Route::get('/fruits','DishesController@fruits');
Route::get('/snacks','DishesController@snacks');
Route::get('/specials','DishesController@specials');
Route::apiResource('inventory','InventoryController');
Route::apiResource('orders','OrderController');
