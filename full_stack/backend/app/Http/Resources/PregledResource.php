<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PregledResource extends JsonResource
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
            'dijagnoza' => $this->dijagnoza,
            'terapija' => $this->terapija,
            'vreme_zavrsetka' => $this->vreme_zavrsetka,
            'status' => $this->status,
            'lekar' => $this->lekar->ime.' '.$this->lekar->prezime,
            'med_osoblje'=>$this->medOsoblje->ime.' '.$this->medOsoblje->prezime,
            'pacijent'=>$this->pacijent->ime.' '.$this->pacijent->prezime,
        ];
    }
}
