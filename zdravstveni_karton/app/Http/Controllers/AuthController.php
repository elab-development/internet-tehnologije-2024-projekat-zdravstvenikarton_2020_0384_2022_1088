<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Funkcija za prijavu na sistem
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'ZDRAVO ' . $user->username . ', DOBRO DOŠLI NAZAD', 'access_token' => $token, 'token_type' => 'Bearer']);
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


        if ($validator->fails())
            return response()->json([$validator->errors(), "GRESKA U VALIDATORU"]);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' =>  $request->password,
            'uloga' => $request->uloga,
            'jmbg' => $request->jmbg,
            'datum_rodjenja' => $request->datum_rodjenja,
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'pol' => $request->pol,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['USPEŠNA REGISTRACIJA', 'podaci' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]);
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
}
