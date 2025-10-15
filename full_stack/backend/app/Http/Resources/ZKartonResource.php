<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ZKartonResource extends JsonResource
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
            'status' => $this->status,
            'poslednja_dijagnoza' => $this->poslednja_dijagnoza,
            'poslednja_terapija' => $this->poslednja_terapija,

            'lekar' => $this->lekar ? $this->lekar->ime . ' ' . $this->lekar->prezime : null,
            'med_osoblje' => $this->medOsoblje ? $this->medOsoblje->ime . ' ' . $this->medOsoblje->prezime : null,
            'pacijent' => $this->pacijent ? $this->pacijent->ime . ' ' . $this->pacijent->prezime : null,
        ];
    }
}
