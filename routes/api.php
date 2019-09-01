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
Route::post('update-inventory','ProductController@update');
Route::apiResource('orders','OrderController');
Route::apiResource('purchases','PurchaseOrderController');
Route::apiResource('petty-cash','PettyCashController');
Route::apiResource('petty-cash-types','PettyCashTypeController');
Route::post('update-po','PurchaseOrderController@update');
Route::post('sales-report','ReportsController@index');
Route::post('petty-cash-report','ReportsController@pettyCash');
Route::post('po-report','ReportsController@po');


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
