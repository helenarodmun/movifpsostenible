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

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function show(User $user)
    {
        return Inertia::render('Home', [
          'user' => $user
        ]);
    }

    //relación entre user y travel, con el tiempo de creación y/o actualización de un registro
    public function bookings()
    {
        return $this->belongsToMany(Travel::class)->withTimestamps();
    }

    //Devuelve booleano en función si el usuario ha reservado un viaje
    public function reservedBy(Travel $travel)
    {
        return $this->bookings->contains($travel);
    }
  
}
