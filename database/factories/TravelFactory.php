<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Travel>
 */
class TravelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     // añade los campos que queremos que se rellenen automáticamente
    public function definition()
    {
        return [
            'origin' => $this->faker->city,
            'destination' => $this->faker->city,
            'date' => $this->faker->date,
            'hour' => $this->faker->time,
            'seats' => $this->faker->randomElement($array = array (1, 2, 3, 4, 5, 6)),
            'user_id' => \App\Models\User::all()->random()->id
        ];
    }
}
