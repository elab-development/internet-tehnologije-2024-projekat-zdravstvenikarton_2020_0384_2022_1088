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
            $table->foreignId('lekar_id')->constrained('users');
            $table->foreignId('med_osoblje_id')->constrained('users');
            $table->foreignId('pacijent_id')->constrained('users')->onDelete('cascade');
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
