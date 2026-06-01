<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::updateOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => 'password',
                'role' => 'pengguna',
            ]
        );

        User::updateOrCreate(
            ['email' => 'admin@mefasafe.com'],
            [
                'name' => 'Admin MefaSafe',
                'password' => 'Admin12345',
                'role' => 'admin',
            ]
        );

        $this->call([
            HospitalSeeder::class,
            DoctorSeeder::class,
        ]);
    }
}
