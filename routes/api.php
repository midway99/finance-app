<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
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



Route::middleware('auth:api')->get('/user',function (Request $request) {
    Route::get('/login-logout',[LoginController::class,'logout']);
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/category', [CategoryController::class, 'store']);
    Route::get('/category', [CategoryController::class, 'index']);
    Route::put('/category-update/{id}', [CategoryController::class, 'update']);
    Route::put('/info-update/{id}', [InfoController::class, 'update']);
    Route::get('/info',[InfoController::class,'index']);
    Route::post('/record', [RecordController::class, 'store']);
    Route::get('/record', [RecordController::class, 'index']);
});

Route::prefix('/user')->group(function (){
    Route::post('/register',[RegisterController::class,'register']);
    Route::post('/login',[LoginController::class,'login']);
});




