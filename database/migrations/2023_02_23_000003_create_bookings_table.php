<?php

namespace Database\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'bookings';

    /**
     * Run the migrations.
     * @table bookings
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('idbookings');
            $table->integer('idtravels');
            $table->integer('idusers');

            $table->index(["idtravels"], 'fk_bookings_travels1_idx');

            $table->index(["idusers"], 'fk_bookings_users1_idx');
            $table->nullableTimestamps();


            $table->foreign('idtravels', 'fk_bookings_travels1_idx')
                ->references('idtravels')->on('travels')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('idusers', 'fk_bookings_users1_idx')
                ->references('idusers')->on('users')
                ->onDelete('no action')
                ->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->tableName);
    }
}
