<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Ramsey\Uuid\Type\Integer;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 5; $i++)
            DB::table('users')->insert([
                'name' => 'Name'.$i,
                'email' => 'moneykeep'.$i . '@gmail.com',
                'password' => Hash::make('password'),
            ]);

    }
}
