<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('pregleds', function (Blueprint $table) {
            // dodavanje spoljnih kljuceva
            $table->unsignedBigInteger('lekar_id');
            $table->unsignedBigInteger('med_osoblje_id');
            $table->unsignedBigInteger('pacijent_id');

            $table->foreign('lekar_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('med_osoblje_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('pacijent_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pregleds', function (Blueprint $table) {
            //
            $table->dropForeign(['lekar_id']);
            $table->dropForeign(['med_osoblje_id']);
            $table->dropForeign(['pacijent_id']);

            $table->dropColumn(['lekar_id', 'med_osoblje_id', 'pacijent_id']);
        });
    }
};
