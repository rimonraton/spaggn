<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/login', function (){
    return redirect('/');
})->name('login');

Route::get('/clear', function() {
    Artisan::call('cache:clear');
    Artisan::call('route:cache');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    return 'Application has been cleared';
});

Route::get('/auth/redirect/{provider}', function ($provider) {
//    return $provider;
    return Socialite::driver($provider)->redirect();
});
Route::get('/auth-callback/{provider}', [AuthController::class, 'authCallback']);
Route::get('/auth/{provider}/callback', [ArtistController::class, 'test']);
//    $socialUser = Socialite::driver($provider)->user();
//    dd($socialUser);
//
//    $user = User::updateOrCreate([
//        'email' => $socialUser->email,
//    ], [
//        'name' => $socialUser->name,
//        'email' => $socialUser->email,
//        'password' => Hash::make(Str::random(10)),
//    ]);
//
//    Auth::login($user);
//
//    return redirect('/dashboard');

    Route::get('{path}', function () {
        return view('app');
    })->where('path', '.*');
