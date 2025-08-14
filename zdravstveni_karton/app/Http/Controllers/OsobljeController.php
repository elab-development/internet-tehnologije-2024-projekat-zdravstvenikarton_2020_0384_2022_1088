<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Pregled;

class OsobljeController extends Controller
{
    // Funkcija koja vraća sve pacijente koji su povezani sa određenim med. osobljem.
    public function pacijenti($id)
    {
        $osoblje = User::find($id);

        if ($osoblje->uloga !== 'med_osoblje') {
            return response()->json("MEDICINSKO OSOBLJE NIJE PRONEĐNO", 404);
        }

        // Pronađi sve preglede gde je osoblje učestvovalo
        $pregledi = Pregled::where('med_osoblje_id',$id);
        $pacijentIds = $pregledi->pluck('pacijent_id')->unique();
        $pacijenti = User::whereIn('id', $pacijentIds)->get();

        if ($pacijenti->isEmpty()) {
            return response()->json("NEMA PACIJENATA KOJI SU POVEZANI SA DATIM MED. OSOBLJEM");
        }

        return response()->json($pacijenti);
    }

    // Funkcija koja vraća sve pacijente koji su u redu čekanja na pregled
    public function red_cekanja()
    {
        // Pronađi sve preglede gde je status "cekanje u redu"
        $pregledi = Pregled::where('status','na_cekanju');
        $pacijentIds = $pregledi->pluck('pacijent_id')->unique();
        $pacijenti = User::whereIn('id', $pacijentIds)->get();

        if ($pacijenti->isEmpty()) {
            return response()->json("NEMA PACIJENATA U RED ČEKANJA");
        }

        return response()->json($pacijenti);
    }
}
