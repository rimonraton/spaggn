<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Charity;

class CharityController extends Controller
{
    public function CharityProfileSave(Request $request)
    {
        return $request->all();
        $request->validate([
            'name' => 'required|min:3',
            'email' => 'email:rfc,dns',
            'mission' => 'required|min:20',
            'address' => 'required|min:10',
            'cover' => 'required|max:200000',
            'logo' => 'required|max:100000',
        ]);
        $sc_profile = null;
        if($request->sc_profile) {
            $sc_profile = $this->getScProfile($request->sc_profile);
        }
        $logo = \Image::make($request->logo);
        $cover = \Image::make($request->cover);
        $coverSm = \Image::make($request->cover);
        $cover->resize(1920, 300, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $coverSm->resize(330, 120);
        $logo->resize(200, 200);
        $coverUrl = 'images/artist/cover/'.str_random(20).'.jpg';
        $coverSmUrl = 'images/artist/cover_sm/'.str_random(20).'.jpg';
        $photoUrl = 'images/artist/photo/'.str_random(20).'.jpg';
        $cover->save(public_path($coverUrl));
        $coverSm->save(public_path($coverSmUrl));
        $logo->save(public_path($photoUrl));
        $charities = implode(',', $request->charities);
        $artist = new Charity([
            'name' => $request->name,
            'email' => $request->email,
            'sc_profile' => $sc_profile,
            'personal_story' => $request->personal_story,
            'inspiration' => $request->inspiration,
            'message_to_world' => $request->message_to_world,
            'charities' => $charities,
            'artistic_inspiration' => $request->artistic_inspiration,
            'photo' => $photoUrl,
            'cover' => $coverUrl,
            'cover_sm' => $coverSmUrl
        ]);
        $artist->save();
        // return $request->all();
        return redirect('Admin/ArtistProfile');
    }
}
