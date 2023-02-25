@extends('layouts.main')
  
@section('content')
<div class="container">
   <div class="row">
       <div class="col-md-8">
           <h1>Viajes</h1>
           @foreach ($travels as $travel)
           <div>
               <li>Origen: {{$travel->origin}}</li>
               <li>Destino: {{$travel->destination}}</li>
               <li>Fecha: {{$travel->date}}</li>
               <li>Hora: {{$travel->hour}}</li>
               <li>Asientos disponible: {{$travel->seats}}</li>
               <small>Publicado por: {{$travel->driver->name}} {{$travel->updated_at->diffForHumans()}}</small>
               </div>
           @endforeach

       </div>