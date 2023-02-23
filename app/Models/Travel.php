<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    use HasFactory;

    //Para que los campos se puedan rellenar automáticamente deben declararse como fillable en el modelo
    protected $fillable = [
        'origin',
        'destination',
        'date',
        'hour',
        'seats',
        'user_id'
    ];
    // El nombre de la tabla correspondiente al modelo
    // Por defecto, Laravel intentará adivinar el nombre de la tabla en función del nombre del modelo, pero a veces puede fallar
    // Al definir el nombre de la tabla aquí, evitamos que Laravel intente adivinarlo
    // y evitamos errores como "Base table or view not found"
    protected $table = 'travels';
}
