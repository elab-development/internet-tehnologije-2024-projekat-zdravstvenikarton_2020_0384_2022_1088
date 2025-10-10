<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Pregled;
use App\Models\ZdravstveniKarton;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class OsobljeController extends Controller
{
    // Funkcija koja vraća sve pacijente koji su povezani sa određenim med. osobljem.
    public function pacijenti($id)
    {
        $osoblje = User::find($id);

        if ($osoblje == null || $osoblje->uloga !== 'med_osoblje') {
            return response()->json("MEDICINSKO OSOBLJE NIJE PRONEĐNO", 404);
        }

        // pronađi sve preglede gde je osoblje učestvovalo
        $pregledi = Pregled::where('med_osoblje_id', $id);
        $pacijentIds = $pregledi->pluck('pacijent_id')->unique();
        $pacijenti = User::whereIn('id', $pacijentIds)->get();

        if ($pacijenti->isEmpty()) {
            return response()->json("NEMA PACIJENATA KOJI SU POVEZANI SA DATIM MED. OSOBLJEM");
        }

        return response()->json($pacijenti);
    }

    // Funkcija koja vraća sve pacijente koji su u redu čekanja na pregled
    public function redCekanja()
    {
        // pronađi sve preglede gde je status "cekanje u redu"
        $pregledi = Pregled::where('status', 'na_cekanju');
        $pacijentIds = $pregledi->pluck('pacijent_id')->unique();
        $pacijenti = User::whereIn('id', $pacijentIds)->get();

        if ($pacijenti->isEmpty()) {
            return response()->json("NEMA PACIJENATA U RED ČEKANJA");
        }

        return response()->json($pacijenti);
    }

    // Funkcija koja kreira zdravstveni karton za pacijenta
    public function kreiranjeKartona($id, Request $zahtev)
    {
        // provera med. osoblja
        $osoblje = User::find($id);
        if ($osoblje == null || $osoblje->uloga !== 'med_osoblje') {
            return response()->json("MEDICINSKO OSOBLJE NIJE PRONEĐNO", 404);
        }

        // provera podataka kartona
        $validator = Validator::make($zahtev->all(), [
            'status' => 'required|string|in:aktivan,neaktivan',
            // poslednja_terapija i poslednja_dijagnoza nisu zahtevani 
            'poslednja_terapija' => 'string|max:255',
            'poslednja_dijagnoza' => 'string|max:255',
            'lekar_id' => ['required', 'integer', Rule::exists('users', 'id')->where('uloga', 'lekar')],
            'pacijent_id' => ['required', 'integer', Rule::exists('users', 'id')->where('uloga', 'pacijent')],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // kreiranje ZdravstvenogKratona
        $z_karton = ZdravstveniKarton::create([
            'status' => $zahtev->status,
            'poslednja_terapija' => $zahtev->poslednja_terapija,
            'poslednja_dijagnoza' => $zahtev->poslednja_dijagnoza,
            'lekar_id' => $zahtev->lekar_id,
            'pacijent_id' => $zahtev->pacijent_id,
            'med_osoblje_id' => $id
        ]);


        return response()->json(['USPEŠNO KREIRAN ZDRAVSTVENI KARTON', $z_karton]);
    }
}
