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
        //obtiene todos los registros de viajes de la base de datos y los envía a la plantilla de Inertia "Travels"
        // $travels = Travel::all();
        // return Inertia::render('/travels/index');
        $travels = Travel::with('driver')
            ->latest()
            ->get();
        $booking = TravelUser::get()->all();
        // dd($travels);
        return Inertia::render('Travels/Index', [
            'travels' => $travels,
            'booking' => $booking,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
        $data = $request;
        $travels = Travel::where('origin', $data['origin'])
            ->orWhere('destination', $data['destination'])
            ->orWhere('date', $data['date'])
            ->with('driver')
            ->latest()
            ->get()
            ->all();
        return Inertia::render('Travels/Search', compact('travels'));
    }

    public function show($id)
{
    $travel = Travel::findOrFail($id);
    return Inertia::render('Profile/ModifyTravel', ['travel' => $travel]);
}


   public function update(TravelForm $request, $id)
{
    //Valida los datos del formulario.
    $validatedData = $request->validated();
     
    $travel = Travel::findOrFail($id);
    $travel->origin = $validatedData['origin'];
    $travel->destination = $validatedData['destination'];
    $travel->date = $validatedData['date'];
    $travel->hour = $validatedData['hour'];
    $travel->seats = $validatedData['seats'];
    $travel->price = $validatedData['price'];
    $travel->save();
   // Recupera todos los viajes del usuario después de guardar el viaje actualizado.
   $travels = Auth::user()->travels;
 // Redirige al perfil del usuario actualizado con un mensaje de éxito.
 return Inertia::render('Profile/MyTravels', ['travels' => $travels]);
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Travel $travel)
    {
        //
    }
}
