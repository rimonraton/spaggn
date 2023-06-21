<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Asset;
use App\Models\Artist;
use App\Models\Charity;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getArtists()
    {
        return User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Artist');
        })->whereHas('profile')->with('profile')->orderBy('id', 'desc')->paginate(5);
    }
    public function getCharities()
    {
        return User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Charity');
        })->whereHas('charityprofile')->with('charityprofile')->orderBy('id', 'desc')->paginate(20);
    }
    public function getAllDataForDashboard()
    {
        $totalartist = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Artist');
        })->count();
        $lastArtist = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Artist');
        })->whereHas('profile', function ($q) {
            $q->where('status', 1);
        })->with('profile:id,user_id,photo')->latest()->take(5)->get();
        $approvedArtist = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Artist');
        })->whereHas('profile', function ($q) {
            $q->where('status', 1);
        })->count();
        $notApprovedartist = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Artist');
        })->whereHas('profile', function ($q) {
            $q->where('status', 0);
        })->count();
        $totalcharity = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Charity');
        })->count();
        $approvedcharity = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Charity');
        })->whereHas('charityprofile', function ($q) {
            $q->where('status', 1);
        })->count();
        $notAppovedcharity = User::whereHas('roles', function ($q) {
            $q->where('roles.name', 'Charity');
        })->whereHas('charityprofile', function ($q) {
            $q->where('status', 0);
        })->count();
        $totalAsset = Asset::count();
        return [
            'totalArtist' => $totalartist,
            'approvedArtist' => $approvedArtist,
            'notApprovedartist' => $notApprovedartist,
            'totalcharity' => $totalcharity,
            'approvedcharity' => $approvedcharity,
            'notAppovedcharity' => $notAppovedcharity,
            'totalAsset' => $totalAsset,
            'lastArtist' => $lastArtist,
        ];
    }
    public function approvedArtist(Request $request)
    {
        $artist = Artist::find($request->id);
        $artist->update([
            'status'=> $artist->status == 1 ? 0 : 1
        ]);
        return $artist->status;
    }
    public function approvedCharity(Request $request)
    {
        $artist = Charity::find($request->id);
        $artist->update([
            'status'=> $artist->status == 1 ? 0 : 1
        ]);
        return $this->getCharities();
    }
}
