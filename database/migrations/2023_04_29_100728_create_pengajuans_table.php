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
        Schema::create('pengajuans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->string('name');
            $table->string('kta');
            $table->foreignId('province_id')->references('id')->on('provinces')->cascadeOnDelete();
            $table->integer('city_id')->nullable();
            $table->string('tgl_mutasi');
            $table->string('doc_mutasi');
            $table->string('keterangan');
            $table->string('tujuan_mutasi');
            $table->string('dpc_mutasi')->nullable();
            $table->string('document')->nullable();
            $table->string('tipe_document')->nullable();
            $table->string('status');
            $table->string('tipe_pindah');
            $table->text('keterangan_revisi')->nullable();
            $table->text('no_urut')->nullable();
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
        Schema::dropIfExists('pengajuans');
    }
};
