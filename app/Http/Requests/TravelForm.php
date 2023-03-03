<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TravelForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'origin' => 'nullable',
             'destination' => 'nullable',
             'date'=> 'nullable|after_or_equal:date',
             'hour' => 'nullable',
             'seats' => 'nullable|digits_between:0,6',
             'price' => 'nullable',
        ];
    }

}
