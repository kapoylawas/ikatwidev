<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wilayahs', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->integer('province_id')->references('id')->on('provinces')->cascadeOnDelete();
            $table->string('alamat');
            $table->string('phone')->nullable();
            $table->string('lat')->nullable();
            $table->string('long')->nullable();
            $table->string('email')->nullable();
            $table->string('instagram')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wilayahs');
    }
};
