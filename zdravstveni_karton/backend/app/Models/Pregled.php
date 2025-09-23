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
        'vreme_zavrsetka',
        'status',

        // spoljni ključevi
        'lekar_id',
        'med_osoblje_id',
        'pacijent_id'
    ];

    // Veza sa lekarom
    public function lekar()
    {
        return $this->belongsTo(User::class, 'lekar_id');
    }

    // Veza sa medicinskim osobljem
    public function medOsoblje()
    {
        return $this->belongsTo(User::class, 'med_osoblje_id');
    }

    // Veza sa pacijentom
    public function pacijent()
    {
        return $this->belongsTo(User::class, 'pacijent_id');
    }
}
