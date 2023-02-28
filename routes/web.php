<?php

use App\Http\Controllers\TravelController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::post('/search', [TravelController::class, 'search'])->name(
    'travels.search'
);
// Route::post('/publish', [TravelController::class, 'store'])->name(
//     'travels.publish'
// );

Route::get('/publish', function () {
    return Inertia::render('Publish');
});
//::post('/', [TravelController::class, 'search'])->name('travels.search');


Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');


//a función name se utiliza para darle un nombre a la ruta, lo que permite hacer referencia a ella desde otras partes del código utilizando el nombre en lugar de la URL
Route::get('travels', [TravelController::class, 'index']);

// Route::post('travels', [TravelController::class, 'store']);