<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Post;
use App\Role;
use App\User;
use App\Media;
use App\Tagged;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('Admin');
    }

    public function index()
    {
        return view('admin.app');
    }

    public function posts(Request $request)
    {
        if($request->wantsJson())
        {
            $posts = Post::paginate(10);
            return response()->json($posts);
        }
        return view('admin.app');
    }

    public function DeletePost($id)
    {
        $post = Post::find($id);
        $post->delete();
        return response()->json(['status' => 'success']);
    }
    //TODO: change name
    public function update(Request $request)
    {
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();
        return response()->json(['post'=>$post]);
    }

    public function Create(Request $request)
    {
        //FIXME:FIX Post AUTHOR
        $post = new Post();
        $post->title     = $request->title;
        $post->content   = $request->content;
        $post->author    = 1;
        $post->save();
        return response()->json( ['post' => $post ]);
    }

    // ---------- USERS MANAGMENT


    public function Media(Request $request)
    {
        $media = Media::all();

        if($request->wantsJson())
        {
            return response()->json($media);
        }

        return view('admin.app');
    }


    public function UploadMedia(Request $request)
    {
        if($request->hasFile('image'))
        {
            //TODO: Check mime type
            //TODO: Check size and add it to database
            //TODO: Create subfolder for files with data

            $media = new Media();

            $file = $request->file('image');
            $media->name = $file->getClientOriginalName();
            $media->type = $file->getClientOriginalExtension();
            $media->url  =  asset("resources/images/" . $media->name);
            $media->size = $file->getSize();
            $file->getRealPath();
            $type = $file->getMimeType();
            $destinationPath = 'resources/images';
            $media->path =  $file->move($destinationPath,$file->getClientOriginalName());

            $media->save();
            return  response()->json([
                'upload' => "success",
                'filepath' => asset("images/".$file->getClientOriginalName()),
                'type' => $type,
                ]);
        }
        else
        {
            //TODO: Response for error behavior
            return response()->json($request->file('image'));
        }
    }


    public function DeleteMedia($id)
    {
        $media = Media::find($id);
        File::delete($media->path);
        $media->delete();
    }
    public function Users()
    {
        $users = User::where('id', '!=', Auth::id())->get();
        $roles = Role::all();
        return view('admin.users.users' , [
            'users' => $users ,
            'roles' => $roles ,
        ]);
    }

    public function User($id)
    {
        return view('admin.users.user')->with('user' , User::find($id));
    }
}
