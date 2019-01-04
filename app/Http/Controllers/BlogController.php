<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;
use \App\Post;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::paginate(5);
        //$posts = $posts->where('confirmed' , true);

        return view('blog.posts' , ['posts' => $posts]);
    }

    public function post($id)
    {
        $post = Post::find($id);

        return view('blog.post' , ['post' => $post]);
    }
}
