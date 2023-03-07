<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelForm;
use App\Models\Travel;
use App\Models\TravelUser;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class TravelController extends Controller
{
    public function index()
    {
        // Obtener la lista de viajes con la información del conductor utilizando Eloquent ORM
        $travels = Travel::with('driver')
            ->latest()
            ->get();
        // Obtener la lista de reservas de viajes
        $reservations = TravelUser::get()->all();
        // Renderizar la vista "Travels/Index" utilizando Inertia.js y pasarle los datos obtenidos
        return Inertia::render('Travels/Index', [
            'travels' => $travels,
            'reservations' => $reservations,
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
        Session::flash('viaje', 'Tu viaje a sido correctamente');
        return Inertia::render('Travels/Index', ['travels' => $travels]);
    }

    //recibe los datos enviados por el usuario, los valida y busca el registro correspondiente en la base de datos.
    // Si se encuentra, muestra la vista travels/search con los datos del viaje. Si no se encuentra, regresa a la vista anterior y muestra un mensaje de error
    public function search(Request $request)
    {
        // Obtener los datos enviados por el usuario mediante la solicitud POST
        $data = $request->all();

        // Buscar los viajes que coincidan con los criterios de búsqueda
        // Se obtiene una instancia del modelo Travel y se crea una instancia del Query Builder.
        //query() es una función que devuelve una instancia del Query Builder asociada con el modelo actual, lo que permite construir consultas
        // programáticamente en lugar de escribir SQL directamente
        //cuando se llama a Travel::query(), se está creando una instancia del Query Builder que está asociada con el modelo Travel, lo que permite
        // construir consultas que interactúan con la tabla travels en la base de datos.
        $query = Travel::query();
        // Si se recibió un valor para el campo en concreto, se agrega una condición en la consulta para que solo se devuelvan los viajes con ese valor.

        if (isset($data['origin'])) {
            $query->where('origin', $data['origin']);
        }

        if (isset($data['destination'])) {
            $query->where('destination', $data['destination']);
        }

        if (isset($data['date'])) {
            $query->where('date', $data['date']);
        }

        if (isset($data['hour'])) {
            $query->where('hour', $data['hour']);
        }

        if (isset($data['seats'])) {
            $query->where('seats', $data['seats']);
        }

        if (isset($data['price'])) {
            $query->where('price', $data['price']);
        }

        $travels = $query
            ->with('driver')
            ->with('driver') // Incluir la información del conductor del viaje en la consulta
            ->latest() // Ordenar los resultados por fecha de forma descendente (los viajes más recientes primero)
            ->get() // Obtener los resultados
            ->all(); // Convertir la colección de resultados en un array
        // Devolver la vista con los resultados de la búsqueda
        return Inertia::render('Travels/Search', [
            'travels' => $travels,
        ]);
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
        Session::flash('edit', 'Se ha editado correctamente');

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
        Session::flash('edit','El viaje ha sido borrado correctamente');
        return Inertia::render('Profile/MyTravels', ['travels' => $travels]);
    }
}