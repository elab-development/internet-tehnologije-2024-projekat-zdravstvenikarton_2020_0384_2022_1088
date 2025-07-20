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
        Schema::create('zdravstveni_kartons', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->enum('status', ['aktivan', 'neaktivan']);
            $table->string('poslednja_terapija');
            $table->string('poslednja_dijagnoza');

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
        Schema::table('zdravstveni_kartons', function (Blueprint $table) {
            $table->dropForeign(['lekar_id']);
            $table->dropForeign(['med_osoblje_id']);
            $table->dropForeign(['pacijent_id']);
        });
        Schema::dropIfExists('zdravstveni_kartons');
    }
};
