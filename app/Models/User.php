<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Casts\Attribute;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'nik',
        'province_id',
        'city_id',
        'email',
        'alamat',
        'password',
        'image',
        'no_anggota',
        'no_str',
        'phone',
        'tempat_lahir',
        'tgl_lahir',
        'date_exprd',
        'ijazah',
        'str',
        'sip',
        'lokasi_pekerjaan',
        'filepakta',
        'status_anggota',
        'pendidikan',
        'nonlinear',
        'kepegawaian',
        'bekerja',
        'istitusi',
        'almtistitusi',
        'alamat_tempat_bekerja',
        'confirm',
        'kelengkapan',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_secret',
        'two_factor_recovery_codes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn($image) => asset('/storage/users/' . $image),
        );
    }

    protected function sip(): Attribute
    {
        return Attribute::make(
            get: fn($sip) => asset('/storage/sip/' . $sip),
        );
    }

    protected function filepakta(): Attribute
    {
        return Attribute::make(
            get: fn($filepakta) => asset('/storage/filepakta/' . $filepakta),
        );
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

    /**
     * city
     *
     * @return void
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function transaction()
    {
        return $this->hasMany(Transaction::class);
    }

    // Definisikan scope withLatestTransaction pada model User
    public function scopeWithLatestTransaction($query)
    {
        return $query->with(['transaction' => function ($query) {
            $query->orderByDesc('tahun')
                ->limit(100);
        }]);
    }


    public function getPermissionArray()
    {
        return $this->getAllPermissions()->mapWithKeys(function ($pr) {
            return [$pr['name'] => true];
        });
    }

    protected function avatar(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value != '' ? asset('/storage/avatars/' . $value) : 'https://ui-avatars.com/api/?name=' . str_replace(' ', '+', $this->name) . '&background=4e73df&color=ffffff&size=100',
        );
    }

    public function suratStrs()
    {
        return $this->hasMany(SuratStr::class);
    }

    public function suratSip()
    {
        return $this->hasMany(SuratSip::class);
    }

    public function dokumenIjazah()
    {
        return $this->hasMany(Ijazah::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function pengajuan()
    {
        return $this->hasOne(Pengajuan::class, 'user_id', 'id');
        // atau hasMany jika satu user bisa memiliki banyak pengajuan
    }
}
