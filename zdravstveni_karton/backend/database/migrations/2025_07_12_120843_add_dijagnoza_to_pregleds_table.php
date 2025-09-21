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
            // vracanje kolone dijagnoza u tabelu pregleds
            $table->string('dijagnoza');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pregleds', function (Blueprint $table) {
            //
        });
    }
};
