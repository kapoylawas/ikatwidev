<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class SuratSip extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'no_sip',
        'date_sip',
        'date_start',
        'date_end',
        'image',
    ];

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/sip/' . $image),
        );
    }
}
