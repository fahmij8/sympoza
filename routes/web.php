<?php

use App\Models\Config_Sympozia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

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

Route::get('/', function () {
    if (Config_Sympozia::where('code', 'FRP')->first()->status) {
        return view('welcome');
    } else {
        return redirect()->route('home');
    }

});

Auth::routes();

Route::get('/home', \App\Http\Livewire\Index::class)->name('home')->middleware(['auth']);
Route::get('/author', \App\Http\Livewire\Author\Idx::class)->name('author.home')->middleware(['auth']);
Route::get('/author/submission', \App\Http\Livewire\Author\SubmissionIdx::class)->name('author.submission')->middleware(['auth']);
Route::get('/author/submission/add', \App\Http\Livewire\Author\SubmissionIdx::class)->name('author.submission.add')->middleware(['auth']);
Route::get('/author/submission/edit/{id}', \App\Http\Livewire\Author\SubmissionIdx::class)->name('author.submission.edit')->whereNumber('id')->middleware(['auth']);
Route::get('/admin', \App\Http\Livewire\Admin\Idx::class)->name('admin.home')->middleware(['auth']);
Route::get('/committee', \App\Http\Livewire\Committee\Idx::class)->name('committee.home')->middleware(['auth']);
Route::get('/committee/news', \App\Http\Livewire\Committee\NewsIdx::class)->name('committee.news')->middleware(['auth']);
Route::get('/user/admin', \App\Http\Livewire\User\Admin\Idx::class)->name('user.admin')->middleware(['auth']);
Route::get('/user/profile', \App\Http\Livewire\User\Profile\Idx::class)->name('user.profile')->middleware(['auth']);
Route::get('/user/refresh', function () {
    Session::flush();
    return redirect('/');
})->name('user.refresh');