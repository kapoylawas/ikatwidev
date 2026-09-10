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
     * Check if a specific year is PAID by the user
     */
    public static function isYearPaid($userId, $year)
    {
        return self::where('user_id', $userId)
            ->where('status', 'PAID')
            ->where(function ($q) use ($year) {
                $q->where('tahun', $year)
                  ->orWhereHas('transactionDetails', function ($qd) use ($year) {
                      $qd->where('tahun', $year);
                  });
            })
            ->exists();
    }

    /**
     * Get unpaid years for a user (Tunggakan & Tahun Berjalan)
     * Kebijakan Penagihan 2026:
     * - Tunggakan tahun 2024 & 2025 ditangguhkan dan akan ditagihkan pada tahun 2027.
     * - Untuk tahun 2026, kewajiban penagihan aktif hanya tahun berjalan (2026).
     * - Mulai tahun 2027 dan seterusnya, seluruh tunggakan dari tahun-tahun sebelumnya akan ditagihkan.
     */
    public static function getUnpaidYears($user, $includeDeferred = false)
    {
        $currentYear = (int) date('Y');

        if ($user->status_anggota === 'Anggota Kehormatan') {
            return [];
        }

        // Tentukan tahun awal kewajiban iuran mengikuti tahun registrasi akun pengguna:
        // Jika created_at null (anggota migrasi lama), default ke 2024 (awal sistem iuran online IKATWI)
        $rawCreatedAt = $user->getRawOriginal('created_at') ?: $user->created_at;
        $registeredYear = $rawCreatedAt ? (int) \Carbon\Carbon::parse($rawCreatedAt)->format('Y') : 2024;
        
        // Minimal tahun 2024 sebagai awal mula sistem iuran daring IKATWI
        $startYear = max(2024, min($registeredYear, $currentYear));

        // Jika anggota memiliki histori transaksi PAID pada tahun yang lebih awal (misal migrasi data lama)
        $firstPaidYear = self::where('user_id', $user->id)
            ->where('status', 'PAID')
            ->whereNotNull('tahun')
            ->min('tahun');

        if ($firstPaidYear && (int) $firstPaidYear < $startYear) {
            $startYear = (int) $firstPaidYear;
        }

        // Jika tahun saat ini < 2027 dan includeDeferred tidak diaktifkan,
        // penagihan aktif hanya untuk tahun berjalan ($currentYear, yaitu 2026),
        // sedangkan tunggakan 2024 & 2025 ditangguhkan ke tahun 2027.
        if (!$includeDeferred && $currentYear < 2027) {
            $unpaidYears = [];
            if (!self::isYearPaid($user->id, $currentYear)) {
                $unpaidYears[] = $currentYear;
            }
            return $unpaidYears;
        }

        // Jika sudah masuk tahun 2027 atau includeDeferred = true, tagihkan seluruh tunggakan
        $unpaidYears = [];
        for ($y = $startYear; $y <= $currentYear; $y++) {
            if (!self::isYearPaid($user->id, $y)) {
                $unpaidYears[] = $y;
            }
        }

        return $unpaidYears;
    }

    /**
     * Get deferred unpaid years (tunggakan yang ditangguhkan ke tahun 2027)
     */
    public static function getDeferredUnpaidYears($user)
    {
        $currentYear = (int) date('Y');
        if ($currentYear >= 2027 || $user->status_anggota === 'Anggota Kehormatan') {
            return [];
        }

        $allUnpaid = self::getUnpaidYears($user, true);
        return array_values(array_filter($allUnpaid, fn ($y) => $y < $currentYear));
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
