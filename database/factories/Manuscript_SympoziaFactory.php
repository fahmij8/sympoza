<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class Manuscript_SympoziaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'conferences_id' => 1,
            'title' => $this->faker->sentence,
            'abstract' => $this->faker->paragraph,
            'milestone_id' => $this->faker->numberBetween(1, 3),
            'status_id' => $this->faker->numberBetween(1, 3),
        ];
    }
}