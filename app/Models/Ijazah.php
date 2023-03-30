<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Ijazah extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'ijazah_akhir',
        'name_universitas',
        'fakultas',
        'jurusan',
        'akredetasi',
        'tahun_lulus',
        'no_ijazah',
        'date_ijazah',
        'ipk',
        'transkip',
        'ijazah',
    ];

    protected function transkip(): Attribute
    {
        return Attribute::make(
            get: fn ($transkip) => asset('/storage/transkip/' . $transkip),
        );
    }

    protected function ijazah(): Attribute
    {
        return Attribute::make(
            get: fn ($ijazah) => asset('/storage/ijazah/' . $ijazah),
        );
    }

}
