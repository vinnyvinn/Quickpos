<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Category::class,5)->create();
        factory(\App\Product::class,100)->create();
        // $this->call(UsersTableSeeder::class);
    }
}
