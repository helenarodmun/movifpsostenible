<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;
class TravelUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'travel_id',
    ];
     // El nombre de la tabla correspondiente al modelo
    // Por defecto, Laravel intentará adivinar el nombre de la tabla en función del nombre del modelo, pero a veces puede fallar
    // En este caso, el modelo CommunityLinkUser corresponde a la tabla 'travel'
    // Al definir el nombre de la tabla aquí, evitamos que Laravel intente adivinarlo
    // y evitamos errores como "Base table or view not found"
    protected $table = 'travel_user';
    
    // Relación muchos a muchos con la tabla de usuarios
    public function bookings()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
    

    /////////////////
   
    //TODO:
//   public function toggleVote(Travel $travel)
//     {
//         // Busca el registro correspondiente al enlace y al usuario actual o crea uno nuevo si no existe
//         $booking = $this->firstOrNew(['user_id' => Auth::id(), 'travel_id' => $travel->id]);
//         // Si el registro ya existe, significa que el usuario ya ha votado y quiere eliminar su voto
//         if ($booking->id) {
//             $booking->delete();
//         // Si el registro no existe, significa que el usuario aún no ha votado y quiere añadir su voto
//         } else {
//             $booking->save();
//         }
//     }
}