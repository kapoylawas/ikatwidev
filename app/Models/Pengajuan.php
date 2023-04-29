<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Pengajuan extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'province_id',
        'city_id',
        'name',
        'kta',
        'tgl_mutasi',
        'document',
        'keterangan',
        'tujuan_mutasi',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected function document(): Attribute
    {
        return Attribute::make(
            get: fn ($document) => asset('/storage/document/' . $document),
        );
    }
}
