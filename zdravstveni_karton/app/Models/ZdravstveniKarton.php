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
        'poslednja_dijagnoza',

        // spoljni ključevi
        'lekar_id',
        'med_osoblje_id',
        'pacijent_id',

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
