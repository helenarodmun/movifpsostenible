<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserForm;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
   
    // Muestra el formulario de edición del perfil de un usuario.
    public function edit(Request $request, User $user)
    {
        // Verifica si el usuario actual es el dueño del perfil.
        if ($user->id != Auth::id()) {
            return redirect()->back()->with('error', 'No tienes permisos para editar este perfil.');
        }

        // Retorna la vista Inertia "User/EditProfile" con la información del usuario.
        return Inertia::render('Profile/Edit', ['users' => $user]);
    }

    // Actualiza el perfil de un usuario.
    public function update(UserForm $request, User $user)
    {


        // Valida los datos del formulario.
        $validatedData = $request->validated();
        $user = User::find(Auth::id());

        $user->name = $validatedData['name'];
        $user->center = $validatedData['center'];
        $user->email = $validatedData['email'];
        $user->description = $validatedData['description'];
        $user->tags = $validatedData['tags'];
        // $user->password =  Hash::make($validatedData['password']);
        $user->save();
        $user->get();
        // Redirige al perfil del usuario actualizado con un mensaje de éxito.
        return Inertia::render('Profile/Index', ['users' => $user]);
    }
//     public function show($id)
// {
//     $user = User::findOrFail($id);
//     $user->load('travels.driver');

//     return Inertia::render('Profile/Index', [
//         'travels' => $user->travels
//     ]);
// }
    public function showCurrentUserTravels()
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();
        $user->load('travels.driver');
        return Inertia::render('Profile/MyTravels', [
            'travels' => $user->travels
        ]);
    }

    public function showOtherUserTravels(User $user)
{
    $travels = Travel::where('user_id', $user->id)
        ->with('driver')
        ->latest()
        ->get();

    return Inertia::render('Profile/OtherUser', [
        'travels' => $travels,
        'user' => $user,
    ]);
}
}
