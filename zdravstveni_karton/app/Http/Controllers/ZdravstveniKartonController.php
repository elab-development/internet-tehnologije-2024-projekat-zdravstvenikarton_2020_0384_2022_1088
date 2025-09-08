<?php

namespace App\Http\Controllers;

use App\Models\ZdravstveniKarton;
use Illuminate\Http\Request;
use App\Models\Pregled;
use Illuminate\Support\Facades\Validator;

class ZdravstveniKartonController extends Controller
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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $zahtev, $idPregleda)
    {
        // funkcija koja omogućava lekaru da obavi pregled
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

    /**
     * Remove the specified resource from storage.
     */
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
