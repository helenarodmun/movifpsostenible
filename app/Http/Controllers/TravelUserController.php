<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmation;
use App\Models\Travel;
use App\Models\TravelUser;
use App\Models\User;
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
        $order->user_id = Auth::user()->id;
        $order->travel_id = $request->id;
        $order->save();

        // Restar una plaza a los asientos disponibles
        $travel = Travel::find($request->id);
        $travel->seats = $travel->seats - 1;
        $travel->save();
        Mail::to($order->user->email)->send(new BookingConfirmation($order));
        // Mail::to($travel->driver->email)->send(new BookingConfirmation($order));
        // Obtener la lista actualizada de viajes y pasarla a la vista
        $travels = Travel::with('driver')->orderBy('updated_at', 'DESC')->get();
        //Auth::user() devuelve el modelo de usuario autenticado actualmente.
        //Auth::user()->travelUsers devuelve una colección de modelos TravelUser relacionados con el usuario actualmente autenticado, o null si no hay ninguna relación.       
        // se llama al método pluck() para extraer los IDs de viaje de los modelos de TravelUser, y se convierte el resultado a un array. Si  es null, se asigna un array vacio para que no de error en la vista vacío.
         // Actualizar la lista de reservas del usuario
        $reservations = Auth::user()->travelUsers->pluck('travel_id')->toArray();

        return Inertia::render('Travels/Search', [
            'travels' => $travels,
            'reservations' => $reservations,
        ]);
    }

    public function destroy($id)
    {

        $travelUser = TravelUser::where('user_id', Auth::user()->id)->where('travel_id', $id)->first();
        $travel = Travel::find($travelUser->travel_id);

        // Aumentamos en uno el número de asientos disponibles
        $travel->increment('seats');

        // Eliminamos el registro de TravelUser correspondiente
        $travelUser->delete();

        // Volvemos a buscar los viajes y las reservas actualizadas
        $travels = Travel::with('driver')->orderBy('updated_at', 'DESC')->get();
        $reservations = Auth::user()->travelUsers->pluck('travel_id')->toArray();

        return Inertia::render('Travels/Search', [
            'travels' => $travels,
            'reservations' => $reservations,
        ]);
    }
}
