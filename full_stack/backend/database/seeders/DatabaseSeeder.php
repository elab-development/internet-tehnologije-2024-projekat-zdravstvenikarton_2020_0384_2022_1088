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

        // Pacijent1
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

        // Pacijent 2
        User::create([
            'username' => 'pacijent2',
            'email' => 'pacijent2@example.com',
            'password' => Hash::make('lozinka123'),
            'uloga' => 'pacijent',
            'jmbg' => '0202002000002',
            'datum_rodjenja' => '1998-02-15',
            'ime' => 'Jovan',
            'prezime' => 'Jovanović',
            'pol' => 'muski',
        ]);

        // Pacijent 3
        User::create([
            'username' => 'pacijent3',
            'email' => 'pacijent3@example.com',
            'password' => Hash::make('lozinka123'),
            'uloga' => 'pacijent',
            'jmbg' => '0303003000003',
            'datum_rodjenja' => '1995-05-20',
            'ime' => 'Milica',
            'prezime' => 'Petrović',
            'pol' => 'zenski',
        ]);

        // Pacijent 4
        User::create([
            'username' => 'pacijent4',
            'email' => 'pacijent4@example.com',
            'password' => Hash::make('lozinka123'),
            'uloga' => 'pacijent',
            'jmbg' => '0404004000004',
            'datum_rodjenja' => '2001-09-10',
            'ime' => 'Nikola',
            'prezime' => 'Ilić',
            'pol' => 'muski',
        ]);


        // Dozvoljeni ID-evi pacijenata
        $pacijenti = [33, 34, 35, 36];

        // Za svakog pacijenta napravi po 3 pregleda
        foreach ($pacijenti as $pacijentId) {
            for ($i = 1; $i <= 3; $i++) {
                Pregled::create([
                    'dijagnoza' => "Dijagnoza $pacijentId-$i",
                    'terapija' => "Terapija $pacijentId-$i",
                    'vreme_zavrsetka' => now()->addDays($i),
                    'status' => $i % 2 == 0 ? 'zavrsen' : 'na_cekanju',
                    'lekar_id' => 31,
                    'med_osoblje_id' => 32,
                    'pacijent_id' => $pacijentId,
                ]);
            }
        }

        // Za svakog pacijenta napravi po jedan zdravstveni karton
        foreach ($pacijenti as $pacijentId) {
            ZdravstveniKarton::create([
                'status' => 'aktivan',
                'poslednja_dijagnoza' => "Dijagnoza $pacijentId",
                'poslednja_terapija' => "Terapija $pacijentId",
                'lekar_id' => 31,
                'med_osoblje_id' => 32,
                'pacijent_id' => $pacijentId,
            ]);
        }
    }
}
