<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmation;
use App\Models\Travel;
use App\Models\TravelUser;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class TravelUserController extends Controller
{
    //función que crea un registro nuevo en la tabla pivote con el id del usuario y el id del viaje que se ha reservado
    public function store(Request $request)
    {
        // Guardar reserva
        $order = new TravelUser;
        $order->user_id = Auth::id();
        $order->travel_id = $request->id;
        $order->save();

        // Restar una plaza a los asientos disponibles
        $travel = Travel::find($request->id);
        $travel->seats = $travel->seats - 1;
        $travel->save();
        Mail::to($request->user())->send(new BookingConfirmation($order));
        // Obtener la lista actualizada de viajes y pasarla a la vista
    $travels = Travel::with('driver')->orderBy('updated_at', 'DESC')->get();
    return Inertia::render('Travels/Search', ['travels' => $travels]);
    }
}