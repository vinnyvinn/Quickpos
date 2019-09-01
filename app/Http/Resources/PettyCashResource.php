<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PettyCashResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'amount' => $this->amount,
            'name' => $this->name,
            'type' => $this->type->name,
            'petty_cash_id' => $this->petty_cash_id,
        ];
    }
}
