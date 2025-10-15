<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LekarController;
use App\Http\Controllers\OsobljeController;
use App\Http\Controllers\PacijentController;
use App\Http\Controllers\PregledController;  // koristi se za resource rutu

/*Route::get('user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

/////////////////////////////////////////////////////////////////////////////////////////////////
Route::group(['middleware' => ['auth:sanctum']], function () {

    // LEKARI
    // Vraća sve preglede jednog lekara
    Route::get('lekar/{id}/pregledi', [LekarController::class, 'pregledi']);
    // Vraća sve pacijente koji su pregledani kod lekara ili čekaju red kod njega
    Route::get('lekar/{id}/pacijenti', [LekarController::class, 'pacijenti']);

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // MED. OSOBLJE
    // Vraća sve pacijente koji su povezani sa datim med. osobljem
    Route::get('med-osoblje/{id}/pacijenti', [OsobljeController::class, 'pacijenti']);
    // Vraća sve pacijente koji imaju pregld sa statusom "čekanje u redu"
    Route::get('med-osoblje/red-cekanja', [OsobljeController::class, 'redCekanja']);
    // Kreiranje zdravstvenog kartona za pacijenta
    Route::post('med-osoblje/{id}/kreiranje-kartona', [OsobljeController::class, 'kreiranjeKartona']);

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // PACIJENT
    Route::get('pacijent/{id}/z-karton', [PacijentController::class, 'zKarton']);

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // RESURSNA RUTA ZA PREGLED
    Route::resource('pregled', PregledController::class);
});
/////////////////////////////////////////////////////////////////////////////////////////////////
// RUTE ZA AUTENTIFIKACIJU
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('my-account', [AuthController::class, 'myAccount'])->middleware('auth:sanctum');
