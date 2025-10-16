<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KorisnikResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'uloga' => $this->uloga,
            'jmbg' => $this->jmbg,
            'datum_rodjenja' => $this->datum_rodjenja,
            'ime' => $this->ime,
            'prezime' => $this->prezime,
            'pol' => $this->pol,
            'lozinka' => $this->password,
        ];
    }
}
