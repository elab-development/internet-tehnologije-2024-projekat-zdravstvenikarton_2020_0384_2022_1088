<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Pregled;
use App\Models\ZdravstveniKarton;
use Illuminate\Database\Seeder;

use Database\Factories\UserFactory;
use Database\Factories\PregledFactory;
use Database\Factories\ZdravstveniKartonFactory;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
   
        // kreiranje po deset korisnika svake vrste
        User::factory()->count(10)->state(['uloga' => 'lekar'])->create();
        User::factory()->count(10)->state(['uloga' => 'med_osoblje'])->create();
        User::factory()->count(10)->state(['uloga' => 'pacijent'])->create();

        // čuvanje id-ova
        // pristupanje statičkim promenljivima klase ZdravstveniKartonFactory
        // pomoću pluck funkcije uzimaju se samo vrednost za id iz rezultata
        // toArray pretvara pretvara Laravel kolekciju u običan niz
        ZdravstveniKartonFactory::$lekarIds = User::where('uloga', 'lekar')->pluck('id')->toArray();
        ZdravstveniKartonFactory::$medOsobljeIds = User::where('uloga', 'med_osoblje')->pluck('id')->toArray();
        ZdravstveniKartonFactory::$pacijentIds = User::where('uloga', 'pacijent')->pluck('id')->toArray();

        PregledFactory::$lekarIds = User::where('uloga', 'lekar')->pluck('id')->toArray();
        PregledFactory::$medOsobljeIds = User::where('uloga', 'med_osoblje')->pluck('id')->toArray();
        PregledFactory::$pacijentIds = User::where('uloga', 'pacijent')->pluck('id')->toArray();

        // kreiranje pregleda i zdravstvenih kartona
        Pregled::factory()->count(20)->create();
        ZdravstveniKarton::factory()->count(10)->create();
        
    }
}
