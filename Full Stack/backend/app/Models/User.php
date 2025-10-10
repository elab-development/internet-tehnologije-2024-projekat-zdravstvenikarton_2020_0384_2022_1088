<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;  // ← ovo je obavezno
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'uloga',
        'jmbg',
        'datum_rodjenja',
        'ime',
        'prezime',
        'pol',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'datum_rodjenja' => 'date'
        ];
    }

    // 1. Veza pacijenta ka pregledu
    public function preglediPacijent()
    {
        return $this->hasMany(Pregled::class, 'pacijent_id');
    }

    // 2. Veza lekara ka pregledu
    public function preglediLekar()
    {
        return $this->hasMany(Pregled::class, 'lekar_id');
    }

    // 3. Veza med. osoblja ka pregledu
    public function preglediOsoblje()
    {
        return $this->hasMany(Pregled::class, 'osoblje_id');
    }

    // 4. Veza pacijenta ka z. kartonu
    public function kartonPacijent()
    {
        return $this->hasOne(ZdravstveniKarton::class, 'pacijent_id');
    }

    // 5. Veza lekara ka z. kartonu
    public function kartoniLekar()
    {
        return $this->hasMany(ZdravstveniKarton::class, 'lekar_id');
    }

    // 6. Veza med. osoblja ka z. kartonu
    public function kartoniOsoblje()
    {
        return $this->hasMany(ZdravstveniKarton::class, 'osoblje_id');
    }
}
