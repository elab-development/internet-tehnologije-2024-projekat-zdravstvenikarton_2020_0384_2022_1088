<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Pregled;
use App\Models\ZdravstveniKarton;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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

        // Pacijent
        User::create([
            'username' => 'pacijent1',
            'email' => 'pacijent1@example.com',
            'password' => Hash::make('lozinka123'),
            'uloga' => 'pacijent',
            'jmbg' => '0101001000001',
            'datum_rodjenja' => '2000-01-01',
            'ime' => 'Marko',
            'prezime' => 'Marković',
            'pol' => 'muski',
        ]);

        // Lekar
        User::create([
            'username' => 'lekar1',
            'email' => 'lekar1@example.com',
            'password' => Hash::make('lozinka123'),
            'uloga' => 'lekar',
            'jmbg' => '0202002000002',
            'datum_rodjenja' => '1999-01-01',
            'ime' => 'Jovana',
            'prezime' => 'Petrović',
            'pol' => 'zenski',
        ]);

        // Med. osoblje
        User::create([
            'username' => 'osoblje1',
            'email' => 'osoblje1@example.com',
            'password' => Hash::make('lozinka123'),
            'uloga' => 'med_osoblje',
            'jmbg' => '0303003000003',
            'datum_rodjenja' => '1990-03-03',
            'ime' => 'Ana',
            'prezime' => 'Nikolić',
            'pol' => 'zenski',
        ]);


        // Dohvati korisnike po ulozi
        $pacijent = User::where('uloga', 'pacijent')->first();
        $lekar = User::where('uloga', 'lekar')->first();
        $osoblje = User::where('uloga', 'med_osoblje')->first();

        // Kreiraj 10 pregleda
        for ($i = 1; $i <= 10; $i++) {
            Pregled::create([
                'dijagnoza' => "Dijagnoza $i",
                'terapija' => "Terapija $i",
                'vreme_zavrsetka' => now()->addDays($i),
                'status' => $i % 2 == 0 ? 'zavrsen' : 'na_cekanju',
                'lekar_id' => $lekar->id,
                'med_osoblje_id' => $osoblje->id,
                'pacijent_id' => $pacijent->id,
            ]);
        }

       
    }
}
