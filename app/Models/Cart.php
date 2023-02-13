<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'product_image',
        'size',
        'price',
        'qty',
        'weight'
    ];

    /**
     * product
     *
     * @return void
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * productImage
     *
     * @return Attribute
     */
    protected function productImage(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/products/' . $image),
        );
    }
}
