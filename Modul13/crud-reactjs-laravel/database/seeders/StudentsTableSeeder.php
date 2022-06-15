<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Student;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('students')->insert([
            'first_name' => 'Muhammad Dhiyaul',
            'last_name' => 'Auliya',
            'full_name' => 'Muhammad Dhiyaul Auliya',
            'email' => 'mdhiyaul5@gmail.com',
            'phone' => '081910441609',
        ]);
    }
}
