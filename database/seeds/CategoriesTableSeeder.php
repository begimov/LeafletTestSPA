<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $categories = [
        [
          'name' => 'Достопримечательности',
        ],
        [
          'name' => 'Станции метро',
        ],
        [
          'name' => 'Музеи',
        ],
        // ['parent_id' => 1, 'name' => '', 'slug' => ''],
      ];
      foreach ($categories as $key => $value) {
        DB::table('categories')->insert($value);
      }
    }
}