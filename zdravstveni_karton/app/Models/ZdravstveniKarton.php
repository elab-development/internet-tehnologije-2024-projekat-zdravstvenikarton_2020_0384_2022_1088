<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZdravstveniKarton extends Model
{
    /** @use HasFactory<\Database\Factories\ZdravstveniKartonFactory> */
    use HasFactory;

    protected $fillable = [
        'status',
        'poslednja_terapija',
        'poslednja_dijagnoza'
    ];
}
