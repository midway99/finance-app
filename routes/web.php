<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
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
//Route::prefix('')->group(function (){
//    Route::get('/categories', function () {
//        return view('index');
//    });
//    Route::get('/detail-record/:id', function () {
//        return view('index');
//    });
//    Route::get('/history', function () {
//        return view('index');
//    });
//
//    Route::get('/planning', function () {
//        return view('index');
//    });
//
//    Route::get('/profile', function () {
//        return view('index');
//    });
//    Route::get('/reord', function () {
//        return view('inde');
//    });
//    Route::get('/', function () {
//        return view('index');
//    });
//    Route::get('/login', function () {
//        return view('index');
//    });
//    Route::get('/register', function () {
//        return view('index');
//    });
//});

Auth::routes();
Route::get('/{any}','AppController')->where('any','.*');





