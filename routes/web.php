<?php

use App\Http\Controllers\TravelController;
use App\Http\Controllers\TravelUserController;
use App\Http\Controllers\UserController;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

Route::get('/search', [TravelController::class, 'search'])->name(
    'travels.search'
);

Route::get('travels', [TravelController::class, 'index']);
// Route::get('travels/{id}',[TravelUserController::class,'store']);

// Route::post('travels', [TravelController::class, 'store']);

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
Route::put('/updateProfile',[UserController::class,'update'])->middleware('auth');

Route::get('/usertravels',[UserController::class,'showCurrentUserTravels']);
Route::get('/otheruser/{user}', [UserController::class, 'showOtherUserTravels']);
Route::get('/modifytravel/{id}',  [TravelController::class, 'show'])->middleware('auth');

Route::put('/modifytravel/{id}', [TravelController::class, 'update'])->middleware('auth');
Route::delete('/deletetravel/{id}', [TravelController::class, 'destroy'])->middleware('auth');
