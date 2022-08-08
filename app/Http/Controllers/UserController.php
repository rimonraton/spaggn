<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function __invoke(Request $request)
    {
        if(auth("sanctum")->check()){
            $user = auth("sanctum")->user();
            $user['role'] = auth("sanctum")->user()->role();
            return response()->json($user);
        }
    }
}
