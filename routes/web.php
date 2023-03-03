<?php

use App\Http\Controllers\TravelController;
use App\Http\Controllers\TravelUserController;
use App\Http\Controllers\UserController;
use App\Models\Travel;
use App\Models\TravelUser;
use App\Models\User;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/search', [TravelController::class, 'search'])->name(
    'travels.search'
);


Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');


//a función name se utiliza para darle un nombre a la ruta, lo que permite hacer referencia a ella desde otras partes del código utilizando el nombre en lugar de la URL
Route::get('travels', [TravelController::class, 'index']);
Route::get('travels/{id}',[TravelUserController::class,'store']);

// Route::post('travels', [TravelController::class, 'store']);
Route::get('/publish', function () {
return Inertia::render('Publish');
});
Route::get('/publish',function(){
return Inertia::render('Travels/Publish');
});

Route::post('/publish',[TravelController::class,'store']);

///////////////////

Route::get('/profile', function () {
return Inertia::render('Profile/Index');
});
Route::post('/profile', function () {
return Inertia::render('Profile/Index');
});
Route::get('/editProfile', function () {
return Inertia::render('Profile/Edit');
});

// Route::get('/updateProfile',[UserController::class,'update'])->middleware('auth');
Route::post('/updateProfile',[UserController::class,'update'])->middleware('auth');