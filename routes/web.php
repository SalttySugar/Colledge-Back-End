<?php

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


Auth::routes();


/**
 * ADMIN ROUTES
 */

 //Admin main page

Route::get('/Admin', 'AdminController@index')->name('admin');
Route::get('/Admin/Posts', 'AdminController@Posts')->name('admin.posts');
Route::post('/Admin/Post/{id}/Update', 'AdminController@update')->name('admin.post.update');
Route::post('/Admin/Post/Create', 'AdminController@Create')->name('admin.post.create');
Route::get('/Admin/Post/{id}/Delete', 'AdminController@DeletePost')->name('admin.post.create');
Route::get('/Admin/Media/', 'AdminController@Media')->name('admin.media');
Route::get('/Admin/Media/{id}/delete', 'AdminController@DeleteMedia')->name('admin.media.delete');
Route::post('/Admin/Media/Upload/', 'AdminController@UploadMedia')->name('admin.upload');





//Post Routes

/**
 * User Routes
 */

Route::get('/User/Profile' , 'UserController@profile')->name('user.profile');

Route::get('/User/Profile/Edit' , 'UserController@index')->name('user.profile.edit');
Route::get('/User/Profile/Posts' , 'UserController@posts')->name('user.profile.posts');
Route::get('/User/Profile/Post/{id}/Edit' , 'UserController@edit_post')->name('user.post.edit');
Route::post('/User/Profile/Post/{id}/Edit' , 'UserController@edit_post')->name('user.post.edit');
Route::get('/User/Profile/Post/Create' , 'UserController@create_post')->name('user.post.create');
Route::post('/User/Profile/Post/Create' , 'UserController@create_post')->name('user.post.create');
Route::get('/User/Profile/Post/{id}/Delete' , 'UserController@delete_post')->name('user.post.delete');
Route::get('/User/{id}' , 'UserController@index')->name('user');




 Route::get('/' , 'HomeController@index')->name('home');
 Route::get('/Post/{id}' , 'BlogController@post')->name('blog.post');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
