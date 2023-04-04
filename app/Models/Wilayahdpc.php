<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wilayahdpc extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_id',
        'alamat',
        'phone',
        'email',
        'instagram',
        'name_ketua',
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
