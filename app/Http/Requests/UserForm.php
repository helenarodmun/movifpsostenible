<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserForm extends FormRequest
{
    
    public function authorize()
    {
        return true;
    }

   
    public function rules()
    {
        // Define las reglas de validación para cada campo del formulario.
        return [
            'name' => 'nullable|string', // El campo de nombre es opcional y debe ser una cadena de caracteres.
            'email' => 'nullable|string|email|max:255', // El campo de correo electrónico es opcional y debe ser una dirección de correo electrónico válida con un máximo de 255 caracteres.
            'center' => 'nullable|string|max:20', // El campo de centro es opcional y debe ser una cadena de caracteres con un máximo de 20 caracteres.
            'description' => 'nullable|string|max:255', // El campo de descripción es opcional y debe ser una cadena de caracteres con un máximo de 255 caracteres.
            'tags' => 'nullable', // El campo de etiquetas es opcional.
        ];
    }
    
}
