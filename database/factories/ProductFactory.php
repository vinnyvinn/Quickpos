<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
    return [
        'name' => $faker->beverageName(),
        'price' => $faker->numberBetween(50,200),
        'quantity' => $faker->numberBetween(5,20),
        'category_id' => function(){
        return \App\Category::all()->random();
        }
    ];
});
