<?php

use App\Song;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ids = [
            'ukick72Qafc',
            'bbEoRnaOIbs',
            'lNzHARgbCG8',
            'djE-BLrdDDc',
            'zXDAYlhdkyg'
        ];

        foreach($ids as $id) {
            Song::create([
                'user_id' => 1,
                'video_id' => $id
            ]);
        }

        // $this->call(UsersTableSeeder::class);
    }
}
