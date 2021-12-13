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

    protected $milestone_id = null;
    protected $status_id = null;

    protected function generateMilestoneId()
    {
        $this->milestone_id = $this->faker->numberBetween(1, 4);
        return $this->milestone_id;
    }

    protected function generateStatusId($milestone_id)
    {
        if ($milestone_id == 1) {
            $this->status_id = $this->faker->numberBetween(1, 2);
            return $this->status_id;
        } else {
            $this->status_id = 3;
            return $this->status_id;
        }
    }

    public function definition()
    {
        return [
            'user_id' => 1,
            'conferences_id' => 1,
            'title' => $this->faker->sentence,
            'abstract' => $this->faker->paragraph(rand(4, 8)),
            'keywords' => json_encode($this->faker->words(rand(1, 4))),
            'milestone_id' => $this->generateMilestoneId(),
            'status_id' => $this->generateStatusId($this->milestone_id),
        ];
    }
}