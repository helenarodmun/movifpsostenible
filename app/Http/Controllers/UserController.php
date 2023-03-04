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
        // Busca al usuario actualmente autenticado en la aplicación.
        $user = User::find(Auth::id());
        // Actualiza las propiedades del usuario con los datos validados del formulario.
        $user->name = $validatedData['name'];
        $user->center = $validatedData['center'];
        $user->email = $validatedData['email'];
        $user->description = $validatedData['description'];
        $user->tags = $validatedData['tags'];
        // $user->password =  Hash::make($validatedData['password']);
        $user->save();
        // Carga de nuevo el objeto de usuario para asegurarse de que se estén devolviendo los datos más actualizados.
        $user->get();
        // Redirige al perfil del usuario actualizado con un mensaje de éxito.
        return Inertia::render('Profile/Index', ['users' => $user]);
    }

    public function showCurrentUserTravels()
    {
        // Verifica si el usuario está autenticado.
        if (!Auth::check()) {
            // Si no está autenticado, redirige a la página de inicio de sesión.
            return redirect()->route('login');
        }
        // Obtiene el usuario actualmente autenticado.
        $user = Auth::user();
        // Carga los viajes del usuario con los datos del conductor relacionados.
        $user->load('travels.driver');
        // Renderiza la vista "Profile/MyTravels" utilizando la biblioteca Inertia, pasando los viajes del usuario como variable.
        return Inertia::render('Profile/MyTravels', [
            'travels' => $user->travels
        ]);
    }

    public function showOtherUserTravels(User $user)
    {
         // Obtiene todos los viajes relacionados con el usuario especificado, ordenados por fecha de creación.
        $travels = Travel::where('user_id', $user->id)
            ->with('driver')
            ->latest()
                ->get();
        // Renderiza la vista "Profile/OtherUser" utilizando la biblioteca Inertia, pasando los viajes del usuario especificado y los datos del usuario como variables.
        return Inertia::render('Profile/OtherUser', [
            'travels' => $travels,
            'user' => $user,
        ]);
    }
}
