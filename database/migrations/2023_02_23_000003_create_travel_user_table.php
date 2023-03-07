<?php

namespace Database\Migrations;

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
        Schema::create('travel_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('travel_id');
            $table->foreignId('user_id');
            $table->timestamps();

            $table->foreing('travel_id')->reference('id')->on('travel')->onDelete('cascade');
            $table->foreing('user_id')->reference('id')->on('user')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('travel_user');
    }
};