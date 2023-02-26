<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelForm;
use App\Models\Travel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //obtiene todos los registros de viajes de la base de datos y los envía a la plantilla de Inertia "Travels"
        // $travels = Travel::all();
        // return Inertia::render('/travels/index');
        $travels = Travel::latest('updated_at')->paginate(5);
        
        return view('travels.index', compact('travels'));
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
    public function store(TravelForm $request) {
       $request->validated(); 
        
         $request->merge(['user_id' => Auth::id()]);
         Travel::create($request->all());       
         return back();
     }

 //recibe los datos enviados por el usuario, los valida y busca el registro correspondiente en la base de datos.
 // Si se encuentra, muestra la vista travels.show con los datos del viaje. Si no se encuentra, regresa a la vista anterior y muestra un mensaje de error
 public function search(Request $request)
 {
    $data = $request;
     dd($data);
     $travels = Travel::where('origin', $data['origin'])
         ->orWhere('destination', $data['destination'])
         ->orWhere('date', $data['date'])
         ->get()->all();
 
     if ($travels->isEmpty()) {
         return back()->withErrors(['message' => 'No se han encontrado viajes']);
     }
     return Inertia::render('Travels', compact('travels'));
 }
 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function edit(Travel $travel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Travel $travel)
    {
        //
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