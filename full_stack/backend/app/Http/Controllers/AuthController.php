<?php

namespace App\Http\Controllers;

use App\Http\Resources\KorisnikResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;



class AuthController extends Controller
{
    // Funkcija za prijavu na sistem
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Kredencijali nisu ispravni !'], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();

        // brišemo token u slučaju da je već kreiran
        $user->tokens()->delete();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Uspešna prijava !', 'user' => new KorisnikResource($user), 'access_token' => $token, 'token_type' => 'Bearer']);
    }

    // Funkcija za registraciju na sistem
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:8',
            'uloga' => 'required|string|in:lekar,med_osoblje,pacijent',
            'jmbg' => 'required|string|min:13|max:13',
            'datum_rodjenja' => 'required|date',
            'ime' => 'required|string|max:30',
            'prezime' => 'required|string|max:30',
            'pol' => 'required|string|in:muski,zenski'
        ]);

        // ako ne prođe validator u registraciji
        if ($validator->fails())
            return response()->json(['error' => $validator->errors(), 'message' => "Neki podaci nisu validni !"], 422);
        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
            'uloga' => $request->uloga,
            'jmbg' => $request->jmbg,
            'datum_rodjenja' => $request->datum_rodjenja,
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'pol' => $request->pol,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Uspešna registracija !',
            'podaci' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
    // Funkcija za odjavu sa sistema
    public function logout(Request $request)
    {
        // briše sve token-e trenutnog korisnika
        $request->user()->tokens()->delete();

        return response()->json([
            'USPEŠNO STE SE ODJAVILI'
        ]);
    }

    // Funkcija koja vraća podatke za trenutno prijavljenog korisnika
    public function myAccount()
    {
        $user = Auth::user();
        return response()->json(['poruka' => "PRIJAVLJENI KORISNIK", 'korisnik' => new KorisnikResource($user)]);
    }

    /****************************************************************************************** */
    // Funkcija za izmenu lozinke ako je korisnik zaboravio istu
    public function izmenaLozinke(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        // Pronalazak korisnika po emailu
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'Korisnik sa tim emailom ne postoji.'], 404);
        }

        // Generiši novu lozinku (nasumično, npr. 8 karaktera)
        $novaLozinka = Str::random(8);

        // Sačuvaj novu (heširanu) lozinku u bazi
        $user->password = Hash::make($novaLozinka);
        $user->save();

        // Pošalji email sa novom lozinkom
        Mail::raw("TEHNOMEDIC: Vaša nova lozinka je: $novaLozinka", function ($message) use ($user) {
            $message->to($user->email)
                ->subject('Nova lozinka');
        });

        return response()->json(['message' => 'Nova lozinka je poslata na vašu email adresu.']);
    }
}
