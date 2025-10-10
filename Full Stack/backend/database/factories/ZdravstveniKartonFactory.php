<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ZdravstveniKarton>
 */
class ZdravstveniKartonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public static array $lekarIds = [];
    public static array $medOsobljeIds = [];
    public static array $pacijentIds = [];

    public function definition(): array
    {
        return [
            'status' => fake()->randomElement(['aktivan', 'neaktivan']),
            'poslednja_dijagnoza' => fake()->randomElement(['upala pluća', 'prelom', 'boginje']),
            'poslednja_terapija' => fake()->randomElement(['parcetamol', 'fizikalna', 'panklav', 'brufen']),

            'lekar_id' => fake()->randomElement(self::$lekarIds),
            'med_osoblje_id' => fake()->randomElement(self::$medOsobljeIds),
            'pacijent_id' => array_shift(self::$pacijentIds),  // kada se id pacijenta iskoristi jednom ne može se više koristiti to omogućava array_shifta

        ];
    }
}
