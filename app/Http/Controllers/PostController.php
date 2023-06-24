<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function getPosts()
    {
        $posts = Post::with('user')->orderBy('id', 'desc')->paginate(10);
        return response()->json($posts, 200);
    }
    public function getPost(Post $post)
    {
        $post = $post->load('user:id,name');
        return response()->json($post, 200);
    }
    public function savePost(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3',
            'description' => 'required|min:10',
        ]);
        $photo = '';
        if($request->coverPhoto) {
            $cover = \Image::make($request->coverPhoto);
            $coverUrl = 'images/blogs/'.Str::random(32).'.jpg';
            $cover->save(public_path($coverUrl));
            $photo = '/'.$coverUrl;
        }


        return Post::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'photo' => $photo,
            'status' => 1
        ]);

    }

    public function savePostImage(Request $request)
    {
        $path = $request->file('image')->store('public/post');
        return '/storage/' . $path;
    }
}
