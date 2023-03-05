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
        'price',
        'user_id'
    ];
    // El nombre de la tabla correspondiente al modelo
    // Por defecto, Laravel intentará adivinar el nombre de la tabla en función del nombre del modelo, pero a veces puede fallar
    // Al definir el nombre de la tabla aquí, evitamos que Laravel intente adivinarlo
    // y evitamos errores como "Base table or view not found"
    protected $table = 'travels';
    // Establece la relación de la tabla travel con la tabla users mediante la columna user_id
    public function driver()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    // Establece la relación muchos a muchos de la tabla travels con la tabla users
    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
    // Establece la relación muchos a muchos de la tabla travels con la tabla users y guarda los timestamps
    
    // public function bookings()
    // {
    //     return $this->belongsToMany(User::class)->withTimestamps();
    // }
}