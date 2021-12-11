<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ManuscriptFile_SympoziaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'file_type' => 1,
            'name' => $this->faker->word(),
        ];
    }
}