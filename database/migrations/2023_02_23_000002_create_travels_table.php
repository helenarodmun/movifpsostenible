<?php

namespace Database\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTravelsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'travels';

    /**
     * Run the migrations.
     * @table travels
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('idtravels');
            $table->string('origin', 45)->nullable();
            $table->string('destination', 45)->nullable();
            $table->date('date')->nullable();
            $table->time('hour')->nullable();
            $table->tinyInteger('seats')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('update_at')->nullable();
            $table->integer('idusers');

            $table->index(["idusers"], 'fk_travels_users_idx');


            $table->foreign('idusers', 'fk_travels_users_idx')
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
