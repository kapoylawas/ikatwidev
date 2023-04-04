<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wilayahdpc extends Model
{
    use HasFactory;

    protected $fillable = [
        'province_id',
        'alamat',
        'phone',
        'email',
        'instagram',
        'name_ketua',
    ];

    public function province()
    {
        return $this->belongsTo(Province::class);
    }
}
