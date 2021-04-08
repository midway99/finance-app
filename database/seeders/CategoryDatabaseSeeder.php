<?php


namespace Database\Seeders;


use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CategoryDatabaseSeeder
{
    public function run()
    {
        for ($i = 1; $i < 5; $i++)
            DB::table('categories')->insert([
                'user_id' => $i,
            ]);

    }
}
