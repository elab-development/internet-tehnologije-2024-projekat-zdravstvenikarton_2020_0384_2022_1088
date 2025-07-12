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
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('zdravstveni_kartons');
    }
};
