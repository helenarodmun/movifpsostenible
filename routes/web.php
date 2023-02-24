<?php


use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TravelController;


Route::get('/', function () {
    return Inertia::render('Home');
    });


Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth','verified'])->name('home');

Route::get('/welcomereact', function () {
    $user = new User();
    $user->name = "Mr. Bean";
    return Inertia::render('Welcome', ['user' => $user]);
    });

//a función name se utiliza para darle un nombre a la ruta, lo que permite hacer referencia a ella desde otras partes del código utilizando el nombre en lugar de la URL
Route::get('/travels', [TravelController::class, 'index'])->name('travels.index');


Route::resource('/travels', TravelController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    // ->middleware(['auth', 'verified'])
    ;



