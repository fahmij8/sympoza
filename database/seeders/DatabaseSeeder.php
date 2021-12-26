<?php

namespace Database\Seeders;

use App\Models\Conferences_Sympozia;
use App\Models\Config_Sympozia;
use App\Models\FileType_sympozia;
use App\Models\ManuscriptMilestone_Sympozia;
use App\Models\ManuscriptStatus_Sympozia;
use App\Models\ProfileTitle_Sympozia;
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

    // Sympozia Conferences
    public $scopes = [
        "Engineered materials, Dielectrics, and Plasmas",
        "Telecommunication, and Networking",
        "Component, circuit and devices",
        "Power Energy and Industry application",
        "Computing and processing",
        "Electrical Engineering Education",
    ];

    public function run()
    {
        // Roles
        Role::create([
            'name' => 'admin',
            'display_name' => 'Administrator',
            'description' => 'System Administrator',
        ]);

        Role::create([
            'name' => 'committee',
            'display_name' => 'Committee',
            'description' => 'Conference committee',
        ]);

        Role::create([
            'name' => 'author',
            'display_name' => 'Author',
            'description' => 'Article author',
        ]);

        Role::create([
            'name' => 'reviewer',
            'display_name' => 'Reviewer',
            'description' => 'Reviewer of ISMEE',
        ]);

        // Sympozia config front-page
        Config_Sympozia::create([
            'code' => 'FRP',
            'description' => 'Front page',
            'status' => '1',
        ]);

        // Initial conferences data
        Conferences_Sympozia::create([
            'name' => 'The 3rd International Symposium on Materials and Electrical Engineering',
            'short_name' => 'ISMEE2021',
            'scope' => json_encode($this->scopes),
        ]);

        // Sympozia file type
        FileType_sympozia::create([
            'code' => 'REV',
            'description' => 'Review manuscript',
        ]);

        FileType_sympozia::create([
            'code' => 'FUL',
            'description' => 'Full paper',
        ]);

        FileType_sympozia::create([
            'code' => 'COP',
            'description' => 'Copyright',
        ]);

        // Sympozia milestone
        ManuscriptMilestone_Sympozia::create([
            'code' => 'SUB',
            'description' => 'Submitted',
        ]);

        ManuscriptMilestone_Sympozia::create([
            'code' => 'ACC',
            'description' => 'Accepted',
        ]);

        ManuscriptMilestone_Sympozia::create([
            'code' => 'REV',
            'description' => 'Need Revision',
        ]);

        ManuscriptMilestone_Sympozia::create([
            'code' => 'REJ',
            'description' => 'Rejected',
        ]);

        // Sympozia Manuscript Status
        ManuscriptStatus_Sympozia::create([
            'code' => 'WRV',
            'description' => 'Awaiting Review',
        ]);

        ManuscriptStatus_Sympozia::create([
            'code' => 'IRV',
            'description' => 'Review in Progress',
        ]);

        ManuscriptStatus_Sympozia::create([
            'code' => 'CRV',
            'description' => 'Review Completed',
        ]);

        // Sympozia Profile Title
        ProfileTitle_Sympozia::create([
            'code' => 'Mr.',
        ]);

        ProfileTitle_Sympozia::create([
            'code' => 'Mrs.',
        ]);

        ProfileTitle_Sympozia::create([
            'code' => 'Ms.',
        ]);

        ProfileTitle_Sympozia::create([
            'code' => 'Dr.',
        ]);

        ProfileTitle_Sympozia::create([
            'code' => 'Prof.',
        ]);

        // Initial User
        $fahmi = User::create([
            'name' => 'Fahmi Jabbar',
            'email' => 'fahmijabbar@google.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        ]);

        Profile_Sympozia::create([
            'user_id' => $fahmi->id,
            'first_name' => 'Fahmi',
            'last_name' => 'Jabbar',
            'email' => $fahmi->email,
        ]);

        $fahmi->roles()->attach(Role::where('name', 'author')->first());

        // Additional User
        $adminlte = User::create([
            'name' => 'Admin LTE',
            'email' => 'adminlte@google.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        ]);

        Profile_Sympozia::create([
            'user_id' => $adminlte->id,
            'first_name' => 'Admin',
            'last_name' => 'LTE',
            'email' => $adminlte->email,
        ]);

        $adminlte->roles()->attach(Role::where('name', 'admin')->first());
    }
}