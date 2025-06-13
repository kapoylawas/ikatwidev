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
        'dpc_mutasi',
        'status',
        'keterangan_revisi',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * province
     *
     * @return void
     */
    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function tujuan()
    {
        return $this->belongsTo(Province::class, 'tujuan_mutasi');
    }

    public function tujuanDpc()
    {
        return $this->belongsTo(City::class, 'dpc_mutasi');
    }

    /**
     * city
     *
     * @return void
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }


    protected function document(): Attribute
    {
        return Attribute::make(
            get: fn($document) => asset('/storage/document/' . $document),
        );
    }
}
