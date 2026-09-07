<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'province_id',
        'city_id',
        'invoice',
        'courier_name',
        'courier_service',
        'courier_cost',
        'weight',
        'grand_total',
        'status',
        'cek_ts',
        'reference',
        'tahun',
        'address',
        'keterangan',
    ];

    /**
     * transactionDetails
     *
     * @return void
     */
    public function transactionDetails()
    {
        return $this->hasMany(TransactionDetail::class);
    }

    /**
     * user
     *
     * @return void
     */
    public function user()
    {
        return $this->belongsTo(User::class);
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

    protected $appends = [
        'raw_created_at',
        'expires_at',
        'is_expired',
        'seconds_remaining',
    ];

    /**
     * Expire UNPAID transactions older than 24 hours (1440 minutes)
     * and cancel superseded UNPAID transactions where the dues are already PAID.
     */
    public static function expireOldUnpaidTransactions($userId = null)
    {
        $cutoff = \Carbon\Carbon::now()->subHours(24);
        
        // 1. Expire old UNPAID transactions (>24h)
        $query = self::where('status', 'UNPAID')
            ->where('created_at', '<=', $cutoff);

        if ($userId) {
            $query->where('user_id', $userId);
        }

        $query->update(['status' => 'EXPIRED']);

        // 2. Cancel active UNPAID transactions where the user already has a PAID record for the same year
        // Only inspect the few UNPAID records instead of looping through all historical paid records
        $unpaidQuery = self::where('status', 'UNPAID')->whereNotNull('tahun');
        if ($userId) {
            $unpaidQuery->where('user_id', $userId);
        }

        $unpaidTxs = $unpaidQuery->get(['id', 'user_id', 'tahun']);
        foreach ($unpaidTxs as $u) {
            $hasPaid = self::where('user_id', $u->user_id)
                ->where('tahun', $u->tahun)
                ->where('status', 'PAID')
                ->exists();

            if ($hasPaid) {
                self::where('id', $u->id)->update(['status' => 'CANCELLED']);
            }
        }
    }

    /**
     * Get unpaid years for a user (Tunggakan & Tahun Berjalan)
     */
    public static function getUnpaidYears($user)
    {
        $currentYear = (int) date('Y');

        if ($user->status_anggota === 'Anggota Kehormatan') {
            return [];
        }

        // Determine registration start year (default minimal from 2024 up to currentYear)
        $registeredYear = $user->created_at ? (int) \Carbon\Carbon::parse($user->created_at)->format('Y') : $currentYear;
        $startYear = max(2024, min($registeredYear, $currentYear));

        $unpaidYears = [];
        for ($y = $startYear; $y <= $currentYear; $y++) {
            $isPaid = self::where('user_id', $user->id)
                ->where('status', 'PAID')
                ->where(function ($q) use ($y) {
                    $q->where('tahun', $y)
                      ->orWhereHas('transactionDetails', function ($qd) use ($y) {
                          $qd->where('tahun', $y);
                      });
                })
                ->exists();

            if (!$isPaid) {
                $unpaidYears[] = $y;
            }
        }

        return $unpaidYears;
    }

    /**
     * createdAt
     *
     * @return Attribute
     */
    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value 
                ? \Carbon\Carbon::parse($value)->setTimezone('Asia/Jakarta')->translatedFormat('l, d F Y H:i') . ' WIB'
                : '-',
        );
    }

    public function getRawCreatedAtAttribute()
    {
        return $this->getRawOriginal('created_at') 
            ? \Carbon\Carbon::parse($this->getRawOriginal('created_at'))->toISOString() 
            : null;
    }

    public function getExpiresAtAttribute()
    {
        return $this->getRawOriginal('created_at') 
            ? \Carbon\Carbon::parse($this->getRawOriginal('created_at'))->addHours(24)->toISOString() 
            : null;
    }

    public function getIsExpiredAttribute()
    {
        if ($this->status === 'EXPIRED') return true;
        if ($this->status !== 'UNPAID') return false;

        if (!$this->getRawOriginal('created_at')) return false;

        return \Carbon\Carbon::parse($this->getRawOriginal('created_at'))->addHours(24)->isPast();
    }

    public function getSecondsRemainingAttribute()
    {
        if ($this->status !== 'UNPAID' || !$this->getRawOriginal('created_at')) {
            return 0;
        }

        $expiresAt = \Carbon\Carbon::parse($this->getRawOriginal('created_at'))->addHours(24);
        $diff = \Carbon\Carbon::now()->diffInSeconds($expiresAt, false);

        return $diff > 0 ? (int)$diff : 0;
    }
}
