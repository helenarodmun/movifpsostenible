<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelForm;
use App\Models\Travel;
use App\Models\TravelUser;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TravelController extends Controller
{

    public function index()
    {

        // Obtener la lista de viajes con la información del conductor utilizando Eloquent ORM
        $travels = Travel::with('driver')
            ->latest()
            ->get();
        // Obtener la lista de reservas de viajes
        $booking = TravelUser::get()->all();
        // Renderizar la vista "Travels/Index" utilizando Inertia.js y pasarle los datos obtenidos
        return Inertia::render('Travels/Index', [
            'travels' => $travels,
            'booking' => $booking,
        ]);
    }

    public function store(TravelForm $request)
    {
        $request->validated();
        //agrega el ID del usuario autenticado a los datos de la solicitud. Esto asegura que el viaje esté asociado con el usuario correcto.
        $request->merge(['user_id' => Auth::id()]);
        //crea un nuevo registro, el método create recibe un array con todos los datos de la solicitud
        Travel::create($request->all());
        //obtiene todos los viajes de la base de datos, incluyendo la información del conductor asociado a cada viaje.
        // Los viajes se ordenan por fecha de creación, de forma descendente (los más recientes primero).
        $travels = Travel::with('driver')
            ->latest()
            ->get();
        return Inertia::render('Travels/Index', ['travels' => $travels]);
    }

    //recibe los datos enviados por el usuario, los valida y busca el registro correspondiente en la base de datos.
    // Si se encuentra, muestra la vista travels/search con los datos del viaje. Si no se encuentra, regresa a la vista anterior y muestra un mensaje de error
    public function search(Request $request)
    {
        // Obtener los datos enviados por el usuario mediante la solicitud POST
        $data = $request;
        // Buscar los viajes que coincidan con los criterios de búsqueda
        $travels = Travel::where('origin', $data['origin']) // Buscar viajes con el origen especificado
            ->orWhere('destination', $data['destination'])
            ->orWhere('date', $data['date'])
            // ->orWhere('hour','=', $data['hour'])
            // ->orWhere('seats','=', $data['seats'])
            // ->orWhere('price','=', $data['price'])
            ->with('driver') // Incluir la información del conductor del viaje en la consulta
            ->latest() // Ordenar los resultados por fecha de forma descendente (los viajes más recientes primero)
            ->get() // Obtener los resultados
            ->all(); // Convertir la colección de resultados en un array
        // Devolver la vista con los resultados de la búsqueda
        return Inertia::render('Travels/Search', ['travels' => $travels]);
    }
    //recibe un parámetro $id que es el identificador del viaje que se desea mostrar
    public function show($id)
    {
        // Buscar el registro de viaje con el id proporcionado
        $travel = Travel::findOrFail($id);
        // Renderizar la plantilla 'Profile/ModifyTravel' y pasar la información del viaje como prop
        return Inertia::render('Profile/ModifyTravel', ['travel' => $travel]);
    }


    public function update(TravelForm $request, $id)
    {
        // Valida los datos del formulario utilizando las reglas definidas en TravelForm.
        $validatedData = $request->validated();
        // Busca el viaje a actualizar por su ID.
        $travel = Travel::findOrFail($id);
        // Actualiza los campos del viaje con los datos validados del formulario.
        $travel->origin = $validatedData['origin'];
        $travel->destination = $validatedData['destination'];
        $travel->date = $validatedData['date'];
        $travel->hour = $validatedData['hour'];
        $travel->seats = $validatedData['seats'];
        $travel->price = $validatedData['price'];
        // Guarda el viaje actualizado en la base de datos.
        $travel->save();
        // Recupera todos los viajes del usuario después de guardar el viaje actualizado.
        $travels = Auth::user()->travels;
        // Redirige al perfil del usuario actualizado.
        return Inertia::render('Profile/MyTravels', ['travels' => $travels]);
    }


    public function destroy($id)
    {
        // Busca el viaje por su ID
        $travel = Travel::findOrFail($id);
        // Elimina el viaje
        $travel->delete();
        // Recupera todos los viajes del usuario después de guardar el viaje actualizado.
        $travels = Auth::user()->travels;
        // Redirige al perfil del usuario actualizado con una lista actualizada de sus viajes.
        return Inertia::render('Profile/MyTravels', ['travels' => $travels]);
    }
}
