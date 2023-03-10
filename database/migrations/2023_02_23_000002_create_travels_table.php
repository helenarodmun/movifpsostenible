<?php

namespace Database\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('travels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->onDelete('cascade');;
            $table->string('origin', 45);
            $table->string('destination', 45);
            $table->date('date');
            $table->time('hour');
            $table->decimal('price');
            $table->unsignedTinyInteger('seats')->unsigned();
            $table->timestamps();

        });
        DB::statement(
            'ALTER TABLE travels ADD CONSTRAINT check_seats_range CHECK (seats >= 0 AND seats <= 6)'
        );
    }
    protected $table = 'travels';
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('travels');
    }
};