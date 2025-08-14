<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pregled;
use App\Models\User;

class LekarController extends Controller
{
    // Funkcija vraća sve preglede za traženog lekara
    public function pregledi($id)
    {
        // Provera da li lekar postoji
        $lekar = User::find($id);

        if ($lekar->uloga !== 'lekar') {
            return response()->json("LEKAR NIJE PRONAĐEN", 404);
        }
        $pregledi = Pregled::where('lekar_id', $id)->get();
        if ($pregledi->count() == 0) {
            return response()->json("NEMA PREGLEDA ZA TRAŽENOG LEKARA");
        }
        return response()->json($pregledi);
    }

    // Funkcija vraća sve pacijente za traženog lekara
    public function pacijenti($id)
    {
        // Provera da li lekar postoji
        $lekar = User::find($id);
        if ($lekar->uloga !== 'lekar') {
            return response()->json("LEKAR NIJE PRONAĐEN",404);
        }

        // Dohvati sve preglede koje je obavio lekar
        $pregledi = Pregled::where('lekar_id', $id)->get();

        // Izdvoji ID-eve pacijenata iz tih pregleda
        $pacijentIds = $pregledi->pluck('pacijent_id')->unique();

        // Dohvati sve pacijente po tim ID-evima
        $pacijenti = User::whereIn('id', $pacijentIds)->get();

        if ($pacijenti->isEmpty()) {
            return response()->json("LEKAR NEMA PREGLEDANIH PACIJENATA");
        }

        return response()->json($pacijenti);
    }
}
