<?php

namespace Database\Seeders;

use App\Models\Config_Sympozia;
use App\Models\Profile_Sympozia;
use App\Models\Role;
use App\Models\User;
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
        // Sympozia config front-page
        Config_Sympozia::factory()->create();

        // Roles
        Role::create([
            'name' => 'admin',
            'display_name' => 'Administrator',
            'description' => 'Full access to everything',
        ]);

        Role::create([
            'name' => 'committee',
            'display_name' => 'Committee',
            'description' => 'Access to managing the conference',
        ]);

        Role::create([
            'name' => 'author',
            'display_name' => 'Author',
            'description' => 'Access to submit paper & conference participant',
        ]);

        Role::create([
            'name' => 'reviewer',
            'display_name' => 'Reviewer',
            'description' => 'Access to review paper',
        ]);

        Role::create([
            'name' => 'participant',
            'display_name' => 'Participant',
            'description' => 'Access to conference info',
        ]);

        // Initial User
        $fahmi = User::factory()->create();
        Profile_Sympozia::create([
            'user_id' => $fahmi->id,
            'first_name' => 'Fahmi',
            'last_name' => 'Jabbar',
        ]);
        $fahmi->roles()->attach(Role::where('name', 'author')->first());
    }
}