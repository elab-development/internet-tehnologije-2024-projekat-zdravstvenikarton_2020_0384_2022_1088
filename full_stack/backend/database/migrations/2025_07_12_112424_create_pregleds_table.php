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
                $table->string('dijagnoza')->nullable();
                $table->string('terapija')->nullable();
                $table->dateTime('vreme_zavrsetka')->nullable();
                $table->string('status');

                // spoljni ključevi dodati u posebnoj migraciji
                
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
