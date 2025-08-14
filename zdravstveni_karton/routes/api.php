<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LekarController;
use App\Http\Controllers\OsobljeController;
use App\Http\Controllers\PacijentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

/////////////////////////////////////////////////////////////////////////////////////////////////
// LEKARI

// Vraća sve preglede jednog lekara
Route::get('/lekar/{id}/pregledi', [LekarController::class, 'pregledi']);
// Vraća sve pacijente koji su pregledani kod lekara ili čekaju red kod njega
Route::get('/lekar/{id}/pacijenti', [LekarController::class, 'pacijenti']);

/////////////////////////////////////////////////////////////////////////////////////////////////
// MED. OSOBLJE
// Vraća sve pacijente koji su povezani sa datim med. osobljem
Route::get('/med_osoblje/{id}/pacijenti',[OsobljeController::class,'pacijenti']);
// Vraća sve pacijente koji imaju pregld sa statusom "čekanje u redu"
Route::get('med_osoblje/red_cekanja',[OsobljeController::class,'red_cekanja']);    

/////////////////////////////////////////////////////////////////////////////////////////////////
// PACIJENT

Route::get('pacijent/{id}/z_karton',[PacijentController::class,'z_karton']);

/////////////////////////////////////////////////////////////////////////////////////////////////
// RESURSNA RUTA ZA ZDRAVSTVENI KARTON
