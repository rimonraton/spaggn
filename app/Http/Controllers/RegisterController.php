<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    public function __invoke(Request $request)
    {
        // return $request->userType;
        $data = $request->validate([
            'name' => 'required|min:3|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|max:255|confirmed'
        ]);
        
        
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $role =  Role::where('role_name' , $request->userType)->first();
        RoleUser::create([
            'role_id' => $role->id,
            'user_id' => $user->id
        ]);
        if ($user) {
            // event(new Registered($user));
            $token = $user->createToken('access_token')->plainTextToken;
            return response()->json(["token" => $token , "type" => "Bearer"]);
        }
    }
}
