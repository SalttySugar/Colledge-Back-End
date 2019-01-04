<?php

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
        DB::table('roles')->insert([
            'name' => 'SuperUser'
        ]);

        DB::table('roles')->insert([
            'name' => 'Admin'
        ]);

        DB::table('roles')->insert([
            'name' => 'User'
        ]);

        DB::table('roles')->insert([
            'name' => 'Newbie'
        ]);


        DB::table('users')->insert([
            'name' => 'SuperUser',
            'email' => 'SuperUser'.'@gmail.com',
            'password' => bcrypt('123456'),
            'role_id' => 1,
        ]);

        DB::table('tags')->insert([
            'name' => 'olimpic'
        ]);

        DB::table('tags')->insert([
            'name' => 'sport'
        ]);

        DB::table('tags')->insert([
            'name' => 'student'
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);


        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);

        DB::table('posts')->insert([
            'title'         => 'First Post',
            'subtitle'      => 'This is subtitle',
            'content'       => 'This is your post. you can edit it from /Users/Posts page',
            'author'        => 1,
        ]);
    }
}
