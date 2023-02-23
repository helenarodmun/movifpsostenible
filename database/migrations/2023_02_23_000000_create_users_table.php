<?php

namespace Database\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'users';

    /**
     * Run the migrations.
     * @table users
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('idusers');
            $table->string('name', 45);
            $table->string('email', 45);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 45);
            $table->tinyInteger('admin')->nullable();
            $table->tinyInteger('blocked')->nullable();
            $table->tinyInteger('validated')->nullable();
            $table->double('coupon')->nullable();
            $table->string('remember_token')->nullable();

            $table->unique(["idusers"], 'idusers_UNIQUE');

            $table->unique(["email"], 'email_UNIQUE');
            $table->nullableTimestamps();
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
