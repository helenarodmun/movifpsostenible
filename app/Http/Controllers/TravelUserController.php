<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\TravelUser;
use Illuminate\Http\Request;

class TravelUserController extends Controller
{
    // Este método se encarga de almacenar el voto del usuario actual para un enlace de la comunidad específico.
    public function store($id, TravelUser $travelUser)
    {
        
        // Se llama al método toggleVote de la instancia de CommunityLinkUser para que el usuario actual vote o quite el voto del enlace de la comunidad pasado como argumento.
        $travelUser->bookingTravel($id);
        // El usuario es redirigido a la página anterior.
        return back();
    }
}