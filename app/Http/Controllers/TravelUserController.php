<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\TravelUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TravelUserController extends Controller
{
    //función que crea un registro nuevo en la tabla pivote con el id del usuario y el id del viaje que se ha reservado
    public function store($id)
    {
        // Guardar reserva
        $booking = new TravelUser;
        $booking->user_id = Auth::id();
        $booking->travel_id = $id;
        $booking->save();

        // Restar una plaza a los asientos disponibles
        $travel = Travel::find($id);
        $travel->seats = $travel->seats - 1;
        $travel->save();

        // Obtener la lista actualizada de viajes y pasarla a la vista
    $travels = Travel::with('driver')->orderBy('updated_at', 'DESC')->get();
    return Inertia::location('Travel/Sarch', ['travels' => $travels]);
    }
}