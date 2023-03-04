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
        'origin' => 'nullable', // El campo de origen es opcional.
        'destination' => 'nullable', // El campo de destino es opcional.
        'date'=> 'nullable|after_or_equal:date', // El campo de fecha es opcional y debe ser posterior o igual a la fecha actual.
        'hour' => 'nullable', // El campo de hora es opcional.
        'seats' => 'nullable|digits_between:0,6', // El campo de asientos es opcional y debe ser un número con un máximo de 6 dígitos.
        'price' => 'nullable', // El campo de precio es opcional.
    ];
}


}
