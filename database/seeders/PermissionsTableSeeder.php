<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //permission dashboard
        Permission::create(['name' => 'dashboard.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'dashboard.statistics', 'guard_name' => 'web']);
        Permission::create(['name' => 'dashboard.chart', 'guard_name' => 'web']);

        //permission users
        Permission::create(['name' => 'users.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.delete', 'guard_name' => 'web']);

        //permission roles
        Permission::create(['name' => 'roles.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles.delete', 'guard_name' => 'web']);

        //permission permissions
        Permission::create(['name' => 'permissions.index', 'guard_name' => 'web']);

        //permission biodata
        Permission::create(['name' => 'biodatas.index', 'guard_name' => 'web']);

        //permission pengajuan member
        Permission::create(['name' => 'pengajuan.index', 'guard_name' => 'web']);

        //permission pengajuan admin
        Permission::create(['name' => 'verifPengajuan.index', 'guard_name' => 'web']);

        Permission::create(['name' => 'tagihan.index', 'guard_name' => 'web']);

        //permission categories
        Permission::create(['name' => 'categories.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'categories.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'categories.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'categories.delete', 'guard_name' => 'web']);

        //permission categories
        Permission::create(['name' => 'wilayah.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'wilayah.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'wilayah.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'wilayah.delete', 'guard_name' => 'web']);

        //permission products
        Permission::create(['name' => 'products.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'products.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'products.show', 'guard_name' => 'web']);
        Permission::create(['name' => 'products.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'products.delete', 'guard_name' => 'web']);

        //permission transactions
        Permission::create(['name' => 'transactions.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'transactions.show', 'guard_name' => 'web']);

        //permission sliders
        Permission::create(['name' => 'sliders.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'sliders.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'sliders.delete', 'guard_name' => 'web']);
    }
}
