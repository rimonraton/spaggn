<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getPosts()
    {
        $posts = Post::with('user')->orderBy('id', 'desc')->paginate(8);
        return response()->json($posts, 200);
    }
    public function getPost(Post $post)
    {
        $post = $post->load('user:id,name');
        return response()->json($post, 200);
    }
}
