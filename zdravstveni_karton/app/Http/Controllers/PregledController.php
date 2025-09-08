<?php

namespace App\Http\Controllers;

use App\Models\ZdravstveniKarton;
use Illuminate\Http\Request;
use App\Models\Pregled;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class PregledController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    // funkcija koja omogućava da se pacijent stavi u red čekanja na pregled
    // stavljanje pacijenta u red čekanja predstavlja kreiranje pregleda od strane med. osoblja
    public function store(Request $zahtev)
    {
        // provera podataka za pregled
        $validator = Validator::make($zahtev->all(), [
            'lekar_id' => ['required', 'integer', Rule::exists('users', 'id')->where('uloga', 'lekar')],
            'pacijent_id' => ['required', 'integer', Rule::exists('users', 'id')->where('uloga', 'pacijent')],
            'med_osoblje_id' => ['required', 'integer', Rule::exists('users', 'id')->where('uloga', 'med_osoblje')],
        ]);

        if ($validator->fails()) {
            return response()->json("GREŠKA U VALIDATORU", 422);
        }

        // kreiranje pregleda
        $pregled = Pregled::create([
            'lekar_id' => $zahtev->lekar_id,
            'pacijent_id' => $zahtev->pacijent_id,
            'med_osoblje_id' => $zahtev->med_osoblje_id,
            'status' => 'na_cekanju',
            'dijagnoza' => '/',
            'terapija' => '/',
            'datum' => null
        ]);

        return response()->json([
            "poruka" => "PACIJENT USPEŠNO STAVLJEN U RED ČEKANJA NA PREGLED",
            "pregled" => $pregled
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ZdravstveniKarton $zdravstveniKarton)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ZdravstveniKarton $zdravstveniKarton)
    {
        //
    }

    // funkcija koja omogućava lekaru da obavi pregled
    public function update(Request $zahtev, $idPregleda)
    {

        // provera pregleda
        $pregled = Pregled::find($idPregleda);
        if ($pregled == null) {
            return response()->json("NEMA PREGLEDA SA DATIM ID-om");
        }

        // provera podataka
        $validator = Validator::make($zahtev->all(), [
            'dijagnoza' => 'required|string|max:255',
            'terapija' => 'required|string|max:255',
            'datum' => 'required|date'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // izmena(obavljanje) pregleda
        $pregled->dijagnoza = $zahtev->dijagnoza;
        $pregled->terapija = $zahtev->terapija;
        $pregled->datum = $zahtev->datum;
        $pregled->status = "završen";
        $pregled->save();

        return response()->json("USPEŠNO OBAVLJEN PREGLED", 200);
    }

    // brisanje pregleda od strane med. osoblja
    public function destroy($idPregleda)
    {
        // provera pregleda
        $pregled = Pregled::find($idPregleda);
        if ($pregled == null && $pregled->status == 'na_cekanju') {
            return response()->json("NEMA PREGLEDA SA DATIM ID-om", 404);
        }

        $pregled->delete();
        return response()->json("USPEŠNO BRISANJE IZ REDA ČEKANJA", 200);
    }
}
