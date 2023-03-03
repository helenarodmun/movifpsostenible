<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use App\Models\Travel;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::delete('delete from travels');
        Travel::factory()->count(15)->create();
    }
}
