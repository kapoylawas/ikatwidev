<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'description',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * productSizes
     *
     * @return void
     */
    public function productSizes()
    {
        return $this->hasMany(ProductSize::class);
    }

    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }
}
