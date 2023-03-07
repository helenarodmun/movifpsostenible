<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TravelForm extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
{
    // Define las reglas de validación para cada campo del formulario.
    return [
        'origin' => 'required|string', // El campo de origen es opcional.
        'destination' => 'required|string', // El campo de destino es opcional.
        'date'=> 'required|date', // El campo de fecha es opcional y debe ser posterior o igual a la fecha actual.
        'hour' => 'required', // El campo de hora es opcional.
        'seats' => 'required|digits_between:0,6', // El campo de asientos es opcional y debe ser un número con un máximo de 6 dígitos.
        'price' => 'required', // El campo de precio es opcional.
    ];
}


}
