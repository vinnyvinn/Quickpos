<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PettyCash extends Model
{
    protected $guarded = [];

    public function type()
    {
       return $this->belongsTo(PettyCashType::class,'petty_cash_id');
    }
}
