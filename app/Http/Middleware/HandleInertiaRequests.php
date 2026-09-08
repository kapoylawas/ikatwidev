<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        if ($user) {
            $user->loadMissing('roles');
        }
        $isUserAdmin = $user && ($user->can('users.index') || $user->hasRole('admin') || $user->hasRole('admin wilayah'));

        return array_merge(parent::share($request), [
            //user authenticated
            'auth' => [
                'user'              => $user ? $user : null,
                'roles'             => $user ? $user->getRoleNames()->toArray() : [],
                'permissions'       => $user ? $user->getPermissionArray() : [],
                'pendingUsersCount' => $isUserAdmin ? \App\Models\User::where('confirm', 'false')->count() : 0,
            ],
            //carts
            'dataCarts' => $user ? [
                'total'     =>  \App\Models\Cart::where('user_id', $user->id)->count() ?? 0,
                'price'     => \App\Models\Cart::where('user_id', $user->id)->sum('price') ?? 0,
            ] : null
        ]);
    }
}
