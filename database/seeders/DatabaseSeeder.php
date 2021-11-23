<?php

namespace Database\Seeders;

use App\Models\Config_Sympozia;
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
        Config_Sympozia::factory()->create();
    }
}