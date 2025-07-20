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
        Schema::create('pregleds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('dijagnoza');
            $table->string('terapija');
            $table->date('datum');

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
        Schema::dropIfExists('pregleds');
    }
};
