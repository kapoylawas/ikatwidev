<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sig extends Model
{
     use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'tahun',
        'jenis_sig',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
