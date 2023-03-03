<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserForm extends FormRequest
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
            'name' => 'nullable|string',
            'email' => 'nullable|string|email|max:255',
            'center' => 'nullable|string|max:20',
            'description' => 'nullable|string|max:255',
            'tags' => 'nullable',
        ];
    }
}
