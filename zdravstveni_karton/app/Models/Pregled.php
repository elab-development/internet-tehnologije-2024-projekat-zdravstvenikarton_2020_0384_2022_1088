<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pregled extends Model
{
    /** @use HasFactory<\Database\Factories\PregledFactory> */

    use HasFactory;

    protected $fillable = [
        'dijagnoza',
        'terapija',
        'datum',
    ];
}
