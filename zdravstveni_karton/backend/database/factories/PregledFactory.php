<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pregled>
 */
class PregledFactory extends Factory
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
            'dijagnoza' => fake()->randomElement(['upala pluća', 'prelom', 'boginje']),
            'terapija' => fake()->randomElement(['paracetamol', 'fizikalna', 'panklav', 'brufen']),
            'datum' => fake()->date(),
            'status' => fake()->randomElement(['na_cekanju', 'zavrsen']),

            'lekar_id' => fake()->randomElement(self::$lekarIds),
            'med_osoblje_id' => fake()->randomElement(self::$medOsobljeIds),
            'pacijent_id' => fake()->randomElement(self::$pacijentIds),

        ];
    }
}
