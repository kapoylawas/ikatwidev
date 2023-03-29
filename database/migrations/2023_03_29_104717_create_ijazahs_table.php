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
        Schema::create('ijazahs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->string('ijazah_akhir');
            $table->string('name_universitas');
            $table->string('fakultas');
            $table->string('jurusan');
            $table->string('akredetasi');
            $table->string('tahun_lulus');
            $table->string('no_ijazah');
            $table->string('date_ijazah');
            $table->string('ipk');
            $table->string('transkip');
            $table->string('ijazah');
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
        Schema::dropIfExists('ijazahs');
    }
};
