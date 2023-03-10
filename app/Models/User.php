<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Inertia\Inertia;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['name', 'email', 'password'];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //relación que representa los viajes que ha publicado un usuario
    public function travels()
    {
        return $this->hasMany(Travel::class);
    }
    //relación entre user y travel, con el tiempo de creación y/o actualización de un registro
    public function travelUsers()
    {
        return $this->belongsToMany(Travel::class)->withTimestamps();
    }
  
    
    //Devuelve booleano en función si el usuario ha reservado un viaje
    public function reservedBy(Travel $travel)
    {
        return $this->travelUsers->contains($travel);
    }
    public function ratings_given()
    {
        return $this->hasMany(Rating::class, 'rated_by_id');
    }

}