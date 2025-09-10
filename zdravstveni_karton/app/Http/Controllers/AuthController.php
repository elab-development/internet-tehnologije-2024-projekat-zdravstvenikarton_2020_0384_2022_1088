<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    // funkcija za prijavu na sistem
    public function login(){

    }

    // funkcija za registraciju na sistem
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
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
           return response()->json([$validator->errors(), "Greska u validatoru"]);
 
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
 
       return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer',]);
    
    }

    // funkcija za odjavu sa sistema
    public function logout(){
        
    }
}