<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class SuratStr extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'no_str',
        'date_str',
        'date_start',
        'date_end',
        'no_sertifikat',
        'image',
    ];

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/str/' . $image),
        );
    }
}
