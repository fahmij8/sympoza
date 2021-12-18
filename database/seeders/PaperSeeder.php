<?php

namespace Database\Seeders;

use App\Models\ManuscriptAuthor_Sympozia;
use App\Models\ManuscriptFile_Sympozia;
use App\Models\Manuscript_Sympozia;
use Illuminate\Database\Seeder;

class PaperSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Initial Paper for development purposes only
        Manuscript_Sympozia::factory()->count(20)->create()->each(function ($manuscript) {
            ManuscriptAuthor_Sympozia::factory()->create([
                'manuscript_id' => $manuscript->id,
                'author_id' => $manuscript->user_id,
            ]);
            ManuscriptFile_Sympozia::factory()->create([
                'manuscript_id' => $manuscript->id,
            ]);
        });
    }
}