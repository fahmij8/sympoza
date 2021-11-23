<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class Config_SympoziaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => "FRP",
            'status' => 1,
        ];
    }
}