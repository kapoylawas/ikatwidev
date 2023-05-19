<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Kegiatan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'link',
        'image'
    ];

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/agenda/' . $image),
        );
    }
}
