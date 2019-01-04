<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('User')->except([
            'index',
        ]);
    }

    public function index($id)
    {
        if( !$user = \App\User::find($id))
            return abort(404);

        return view('user/page' , ['user' => $user] );

    }


    public function profile()
    {
        $user = User::find(Auth::user()->id);

        return view('user.profile' , ['user' => $user]);
    }


    public function edit(Request $request)
    {

    }


    public function posts()
    {
        $user = \App\User::find(Auth::user()->id);
        $posts = \App\Post::all()->where('author' , $user->id );

        return view('user.post.posts' , [

            'user' => $user ,
            'posts' => $posts,

        ]);
    }

    public function create_post(Request $request)
    {
        if($request->isMethod("POST"))
        {
            $post = new \App\Post;

            $post->title = $request->title;
            $post->content = $request->content;
            $post->author = Auth::user()->id;
            $post->save();
            return redirect()->route('user.profile.posts');
        }
        return view('user.post.create');
    }

    public function edit_post(Request $request)
    {
        if($request->isMethod("POST"))
        {
            $post = \App\Post::find($request->id);

            $post->title = $request->title;
            $post->content = $request->content;
            $post->author = Auth::user()->id;
            $post->save();
            return redirect()->route('user.profile.posts' , Auth::user()->id);
        }


        return view('user.post.edit' , ['post' => \App\Post::find($request->id)]);
    }

    public function delete_post($id)
    {
        \App\Post::destroy($id);

        return redirect()->route('user.profile.posts' , Auth::user()->id);
    }

}
