<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\CharityController;
use App\Http\Controllers\MessageInfoController;
use App\Http\Controllers\OrganizationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', RegisterController::class);
    Route::post('/forgot-password', ForgotPasswordController::class);
    Route::post('/reset-password', ResetPasswordController::class);

    // guest verification (temporary auth)
    // Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
    // Route::post('/verify-resend', [VerificationController::class, 'resend']);
});

Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
Route::post('/verify-resend', [VerificationController::class, 'resend']);

Route::middleware('auth:sanctum')->group(function () {
    Route::patch('/profile', ProfileController::class);
    Route::patch('/password', PasswordController::class);

    Route::post('/logout', [AuthController::class, 'logout']);

    // Artist
    Route::post('create-artist-profile', [ArtistController::class, 'ArtistProfileSave']);
    Route::post('create-artist-asset', [ArtistController::class, 'ArtistAssetsSave']);
    Route::get('get-artist-profile', [ArtistController::class, 'getArtistProfile']);
    Route::get('get-artist-assets', [ArtistController::class, 'getArtistAssets']);
    Route::post('image-remove', [ArtistController::class, 'ImageRemove']);

    //Charity
    Route::post('create-charity-profile',[CharityController::class, 'CharityProfileSave']);
    Route::get('get-charity-profile',[CharityController::class, 'getCharityProfile']);

    // in app verification
    // Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
    // Route::post('/verify-resend', [VerificationController::class, 'resend']);
});
Route::get('/user', UserController::class);
Route::get('get-message-info', [MessageInfoController::class, 'index']);
Route::get('get-organizations', [OrganizationController::class, 'index']);