<?php

use Illuminate\Support\Facades\Route;

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

//route register index
Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register')->middleware('guest');

Route::get('/register/cities', [\App\Http\Controllers\Auth\RegisterController::class, 'getCities'])->name('register');

//route register store
Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store'])->name('register.store')->middleware('guest');

//route login index
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login')->middleware('guest');

//route login store
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store'])->name('login.store')->middleware('guest');

//route logout
Route::post('/logout', \App\Http\Controllers\Auth\LogoutController::class)->name('logout')->middleware('auth');

//prefix "account"
Route::prefix('account')->group(function() {
    //middleware "auth"
    Route::group(['middleware' => ['auth']], function () {
        //route dashboard
        Route::get('/dashboard', App\Http\Controllers\Account\DashboardController::class)->name('account.dashboard');

        //route resource biodata   
        Route::resource('/biodatas', \App\Http\Controllers\Account\BiodataController::class, ['as' => 'account'])->middleware('permission:biodatas.index');

        //route resource tagihan iuran   
        Route::resource('/tagihan', \App\Http\Controllers\Account\TagihanController::class, ['as' => 'account'])->middleware('permission:tagihan.index');

        //route resource tagihan upload dokumen   
        Route::resource('/documents', \App\Http\Controllers\Account\DocumentController::class, ['as' => 'account'])->middleware('permission:documents.index');

        // cek status anggota STR
        Route::get('/documents/showstr/{id}', [\App\Http\Controllers\Account\DocumentController::class, 'showStr'])->name('account.documents.showstr');

        // create anggota STR
        Route::get('/documents/createstr/{id}', [\App\Http\Controllers\Account\DocumentController::class, 'createStr'])->name('account.documents.createstr');

        // delete anggota str
        Route::delete('/documents/hapus_str/{id}', [\App\Http\Controllers\Account\DocumentController::class, 'hapus'])->name('account.documents.hapus_str');

        Route::get('/documents/showsip/{id}', [\App\Http\Controllers\Account\DocumentController::class, 'showSip'])->name('account.documents.showsip');

        //route store image product
        Route::post('/documents/storestr', [\App\Http\Controllers\Account\DocumentController::class, 'storeStr'])->name('account.documents.storestr');

        //route resource EKTA   
        Route::resource('/ekta', \App\Http\Controllers\Account\EktaController::class, ['as' => 'account']);

        //route permissions
        Route::get('/permissions', \App\Http\Controllers\Account\PermissionController::class)->name('account.permissions.index')->middleware('permission:permissions.index');

        //route resource roles
        Route::resource('/roles', \App\Http\Controllers\Account\RoleController::class, ['as' => 'account'])
            ->middleware('permission:roles.index|roles.create|roles.edit|roles.delete');

        //route resource users
        Route::resource('/users', \App\Http\Controllers\Account\UserController::class, ['as' => 'account'])
            ->middleware('permission:users.index|users.create|users.edit|users.delete');


        //route resource categories
        Route::resource('/wilayah', \App\Http\Controllers\Account\WilayahCabangAdminController::class, ['as' => 'account'])
            ->middleware('permission:wilayah.index|wilayah.create|wilayah.edit|wilayah.delete');

        //route resource categories
        Route::resource('/categories', \App\Http\Controllers\Account\CategoryController::class, ['as' => 'account'])
            ->middleware('permission:categories.index|categories.create|categories.edit|categories.delete');

        //route store image product
        Route::post('/products/store_image_product', [\App\Http\Controllers\Account\ProductController::class, 'storeImageProduct'])->name('account.products.store_image_product');

        //route destroy image product
        Route::delete('/products/destroy_image_product/{id}', [\App\Http\Controllers\Account\ProductController::class, 'destroyImage'])->name('account.products.destroy_image_product');

        //route resource products
        Route::resource('/products', \App\Http\Controllers\Account\ProductController::class, ['as' => 'account'])
            ->middleware('permission:products.index|products.create|products.show|products.edit|products.delete');

        //route transactions index
        Route::get('/transactions', [App\Http\Controllers\Account\TransactionController::class, 'index'])->name('account.transactions.index')
            ->middleware('permission:transactions.index');

        //route transactions show
        Route::get('/transactions/{invoice}', [App\Http\Controllers\Account\TransactionController::class, 'show'])->name('account.transactions.show')
            ->middleware('permission:transactions.show');

        //route resource sliders
        Route::resource('/sliders', App\Http\Controllers\Account\SliderController::class, ['except' => ['create', 'show', 'edit', 'update'], 'as' => 'account'])
            ->middleware('permission:sliders.index|sliders.create|sliders.delete');
    });
});

/**
 * route home
 */
Route::get('/', \App\Http\Controllers\Web\HomeController::class)->name('web.home.index');

/**
 * route category anggota
 */
Route::get('/anggota', [\App\Http\Controllers\Web\AnggotaController::class, 'index'])->name('web.anggota.index');

/**
 * route category wilayah dan anggota
 */
Route::get('/wilayah', [\App\Http\Controllers\Web\WilayahCabangController::class, 'index'])->name('web.wilayah.index');

/**
 * route category berita
 */
Route::get('/berita', [\App\Http\Controllers\Web\BeritaController::class, 'index'])->name('web.berita.index');

/**
 * route category artikel
 */
Route::get('/artikel', [\App\Http\Controllers\Web\ArtikelController::class, 'index'])->name('web.artikel.index');

/**
 * route category history
 */
Route::get('/history', [\App\Http\Controllers\Web\HistoryController::class, 'index'])->name('web.history.index');

/**
 * route category index
 */
Route::get('/categories', [\App\Http\Controllers\Web\CategoryController::class, 'index'])->name('web.categories.index');

/**
 * route category show
 */
Route::get('/categories/{slug}', [\App\Http\Controllers\Web\CategoryController::class, 'show'])->name('web.categories.show');

/**
 * route products index
 */
Route::get('/products', [\App\Http\Controllers\Web\ProductController::class, 'index'])->name('web.products.index');

/**
 * route products show
 */
Route::get('/products/{slug}', [\App\Http\Controllers\Web\ProductController::class, 'show'])->name('web.products.show');

/**
 * route cart index
 */
Route::get('/carts', [\App\Http\Controllers\Web\CartController::class, 'index'])->name('web.carts.index')
    ->middleware('auth');

/**
 * route cart store
 */
Route::post('/carts', [\App\Http\Controllers\Web\CartController::class, 'store'])->name('web.carts.store')
    ->middleware('auth');

/**
 * route cart delete
 */
Route::delete('/carts/{id}', [\App\Http\Controllers\Web\CartController::class, 'destroy'])->name('web.carts.destroy')
    ->middleware('auth');

/**
 * route checkouts index
 */
Route::get('/checkouts', [\App\Http\Controllers\Web\CheckoutController::class, 'index'])->name('web.checkouts.index')
    ->middleware('auth');

/**
 * route checkouts get cities by province ID
 */
Route::get('/checkouts/cities', [\App\Http\Controllers\Web\CheckoutController::class, 'getCities'])->name('web.checkouts.getCities')
    ->middleware('auth');

/**
 * route checkOngkir
 */
Route::post('/checkouts/checkOngkir', [\App\Http\Controllers\Web\CheckoutController::class, 'checkOngkir'])->name('web.checkouts.checkOngkir')
    ->middleware('auth');

/**
 * route checkout store
 */
Route::post('/checkouts', [\App\Http\Controllers\Web\CheckoutController::class, 'store'])->name('web.checkouts.store')
    ->middleware('auth');

/**
 * route callback
 */
Route::post('/callback', \App\Http\Controllers\Web\CallbackController::class)->name('web.callback');

/**
 * route search
 */
Route::post('/search', \App\Http\Controllers\Web\SearchController::class)->name('web.search.index');

/**
 * route search anggota
 */
Route::post('/searchAnggota', \App\Http\Controllers\Web\SearchAnggotaController::class)->name('web.searchAnggota.index');

// cek status anggota STR
Route::get('/cekstatus', [\App\Http\Controllers\Account\UserController::class, 'ceAktiv']);