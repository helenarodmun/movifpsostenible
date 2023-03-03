 @extends('layouts.main')
 <div class="container">
    <div class="row">
        <div class="col-md-8">
            <div id="app">
                @include('flash-message')
                @yield('content')   
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
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <h3>Publica un viaje</h3>
                 
                </div>
                <div class="card-body">
                    <form method="POST" action="/travels">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="origin">Origen:</label>

                            <input type="text" class="form-control @error ('origin') is-invalid @enderror" id="origin" name="origin" placeholder="¿Cuál va a ser el punto de partida?" value="{{old('origin')}}">
                            @error('origin')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>

                        <div class="form-group">
                            <label for="destination">Destino:</label>
                            <input type="text" class="form-control @error ('origin') is-invalid @enderror" id="destination" name="destination" placeholder="¿Cuál va a ser el destino del viaje?" value="{{old('destination')}}">
                            @error('destination')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>
                        <div class="form-group">
                            <label for="date">Fecha:</label>
                            <input type="date" class="form-control @error ('date') is-invalid @enderror" id="date" name="date" placeholder="Que día va a realizar el viaje?" value="{{old('date')}}">
                            @error('date')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>
                        <div class="form-group">
                            <label for="hour">Hora:</label>
                            <input type="text" class="form-control @error ('hour') is-invalid @enderror" id="hour" name="hour" placeholder="¿A que hora se iniciará el viaje" value="{{old('hour')}}">
                            @error('hour')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>
                        <div class="form-group">
                            <label for="seats">Asientos disponibles:</label>
                            <select class="form-control @error('seats') is-invalid @enderror" name="seats">
                                <option selected disabled>Escoja el número de asientos ...</option>
                                <?php
                                $options = range(6, 0); // generamos un array con los valores permitidos (del 6 al 0)
                                foreach ($options as $option) {
                                    $selected = (old('seats') == $option) ? 'selected' : ''; // si el valor estaba previamente seleccionado, lo marcamos como seleccionado
                                    echo '<option value="' . $option . '"' . $selected . '>' . $option . '</option>';
                                }
                                ?>
                            </select>
                            @error('seats')
                            <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        

                        <div class="form-group card-footer">
                            <button class="btn btn-primary">Publicar viaje</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    {{-- {{$travels->travels()}} --}}

</div>


@stop