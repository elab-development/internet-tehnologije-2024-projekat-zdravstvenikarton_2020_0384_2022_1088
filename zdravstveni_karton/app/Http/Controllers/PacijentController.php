<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ZdravstveniKarton;

class PacijentController extends Controller
{
    //Funkcija koja vraća podatke o zdravstvenom kartonu pacijenta
    public function z_karton($id)
    {
        // Provera da li pacijent postoji
        $pacijent = User::find($id);
        if ($pacijent == null || $pacijent->uloga !== 'pacijent') {
            return response()->json("PACIJENT NIJE PRONAĐEN", 404);
        }
        // sa where se vraća samo objekat i da bi dobili instancu nakon toga mora da ide (get(),first(),...)
        $z_karton = ZdravstveniKarton::where('pacijent_id', $id)->get();
        if ($z_karton->count() == 0) {
            return response()->json("NEMA KARTONA ZA TRAŽENOG PACIJENTA");
        }

        return response()->json($z_karton);
    }
}
