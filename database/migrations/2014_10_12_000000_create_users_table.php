<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 45);
            $table->string('email', 45)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->int('telephone')->nullable();
            $table->path('photo')->nullable();
            $table->string('center')->nullable();
            $table->enum('tags', ['No fumador', 'Extrovertido', 'Introvertido', 'Con Música', 'Sin música', 'Puntual'])->nullable();
            $table->text('description', 150);
            $table->string('password', 255);
            $table->boolean('admin')->nullable();
            $table->boolean('blocked')->nullable();
            $table->boolean('validated')->nullable();
            $table->decimal('coupon')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
        DB::statement('ALTER TABLE users ADD CONSTRAINT check_telf CHECK (telephone LIKE [0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])');
    }
    
    public function down()
    {
        Schema::dropIfExists('users');
    }
    
};