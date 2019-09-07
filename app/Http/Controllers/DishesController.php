<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;

class DishesController extends Controller
{
    public function index()
    {
        return response()->json(Product::where('category_id',1)->get());
    }

    public function show($id)
    {
      $category = Category::first();
      return response()->json(Product::where('category_id',$category->id));
     }
    public function drinks()
    {
        return response()->json(Product::where('category_id',2)->get());
    }
    public function fruits()
    {
        return response()->json(Product::where('category_id',3)->get());
    }
    public function snacks()
    {
        return response()->json(Product::where('category_id',4)->get());
    }
    public function specials()
    {
        return response()->json(Product::where('category_id',5)->get());
    }
}
