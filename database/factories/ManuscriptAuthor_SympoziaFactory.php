<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ManuscriptAuthor_SympoziaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $authorList = array();

    protected function generateAuthor()
    {
        array_push($this->authorList, [
            'author_fn' => ucwords($this->faker->firstName),
            'author_ln' => ucwords($this->faker->lastName),
            'author_af' => ucwords($this->faker->company),
            'author_ml' => strtolower($this->faker->email),
            'author_ct' => $this->faker->country,
            'author_co' => ucwords($this->faker->randomElement(['Yes', 'No'])),
        ]);
    }
    public function definition()
    {
        for ($x = 0; $x <= rand(1, 5); $x++) {
            $this->generateAuthor();
        }

        return [
            'scope' => $this->faker->randomElement([
                "Engineered materials, Dielectrics, and Plasmas",
                "Telecommunication, and Networking",
                "Component, circuit and devices",
                "Power Energy and Industry application",
                "Computing and processing",
                "Electrical Engineering Education",
            ]),
            'presenter' => $this->faker->name,
            'contact' => $this->faker->e164PhoneNumber,
            'author_list' => json_encode($this->authorList),
        ];
    }
}