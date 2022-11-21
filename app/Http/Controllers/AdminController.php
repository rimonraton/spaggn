<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function getArtists()
    {
        return User::whereHas('roles', function ($q) {
            $q->where('roles.name','Artist');
        })->orderBy('id', 'desc')->paginate(20);
    }
    public function getCharities()
    {
        return User::whereHas('roles', function ($q) {
            $q->where('roles.name','Charity');
        })->orderBy('id', 'desc')->paginate(20);
    }
}
