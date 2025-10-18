<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\ZdravstveniKarton;
use App\Models\Pregled;
use App\Http\Resources\ZKartonResource;
use App\Http\Resources\PregledResource;


class PacijentController extends Controller
{
    //Funkcija koja vraća podatke o zdravstvenom kartonu pacijenta
    public function zKarton($id)
    {
        // provera da li pacijent postoji
        $pacijent = User::find($id);
        if ($pacijent == null || $pacijent->uloga !== 'pacijent') {
            return response()->json("PACIJENT NIJE PRONAĐEN", 404);
        }
        // sa where se vraća samo objekat i da bi dobili instancu nakon toga mora da ide (get(),first(),...)
        $z_karton = ZdravstveniKarton::where('pacijent_id', $id)->first();
       

        return new ZKartonResource($z_karton);
    }

     public function pregledi($id)
    {
        // provera da li pacijent postoji
        $pacijent = User::find($id);
        if ($pacijent == null || $pacijent->uloga !== 'pacijent') {
            return response()->json("PACIJENT NIJE PRONAĐEN", 404);
        }
        // sa where se vraća samo objekat i da bi dobili instancu nakon toga mora da ide (get(),first(),...)
        $pregledi = Pregled::where('pacijent_id', $id)->get();
        return PregledResource::collection($pregledi);
    }
}
