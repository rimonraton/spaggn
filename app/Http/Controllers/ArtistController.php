<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Artist;
use App\Models\Asset;
use App\Models\Charity;
use App\Models\Icon;
use App\Models\Organization;
use App\Models\Post;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ArtistController extends Controller
{
    public function ArtistProfile()
    {
        $icons = Icon::all();
        $organizations = Organization::all();
        return view('Admin.Artist.index', compact('icons', 'organizations'));
    }

    public function ArtistProfileSave(Request $request)
    {
        // return $request->coverPhoto;
        // return $request->charities;	
        $request->validate([
            'firstName' => 'required|min:3',
            'email' => 'email:rfc,dns',
            'personalStory' => 'required|min:20',
            'charities' => 'required',
            'coverPhoto' => 'required|max:200000',
            'photo' => 'required|max:100000',
        ]);
        $sc_profile = null;
        $social = collect($request->social)->implode('url', ',');
        if($request->social) {
            $sc_profile = $this->getScProfile($social);
        }
        $photo = \Image::make($request->photo);
        $cover = \Image::make($request->coverPhoto);
        $coverSm = \Image::make($request->coverPhoto);
        $cover->resize(1920, 300, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $coverSm->resize(330, 120);
        $photo->resize(200, 200);
        $coverUrl = 'images/artist/cover/'.Str::random(12).'.jpg';
        $coverSmUrl = 'images/artist/cover_sm/'.Str::random(12).'.jpg';
        $photoUrl = 'images/artist/photo/'.Str::random(12).'.jpg';
        $cover->save(public_path($coverUrl));
        $coverSm->save(public_path($coverSmUrl));
        $photo->save(public_path($photoUrl));
        $charities = collect($request->charities)->implode('id', ',');
        $artist = new Artist([
            'user_id' => auth()->id,
            'name' => $request->firstName.' '.$request->lastName,
            'email' => $request->email,
            'sc_profile' => $sc_profile,
            'personal_story' => $request->personalStory,
            'inspiration' => $request->inspiration,
            'message_to_world' => $request->messageToWorld,
            'charities' => $charities,
            'artistic_inspiration' => $request->artisticInspiration,
            'photo' => $photoUrl,
            'cover' => $coverUrl,
            'cover_sm' => $coverSmUrl
        ]);
        $artist->save();
        return 'success';
        // return $request->all();
        // return redirect('Admin/ArtistProfile');
    }

    public function ArtistAssets()
    {
        $assets = Asset::where('user_id', auth()->id())->latest()->paginate(10);
        $title = 'Artist Assets | Good Giving Network';
        return view('Admin.Artist.assets', compact('assets', 'title'));
    }

    public function ArtistAssetsSave(Request $request)
    {
        //return $request->all();
        $request->validate([
            'name' => 'required|min:3',
            'email' => 'email:rfc,dns',
            'personal_story' => 'required|min:20',
            'charities' => 'required',
            'cover' => 'required|max:200000',
            'photo' => 'required|max:100000',
        ]);
        $sc_profile = null;
        if($request->sc_profile) {
            $sc_profile = $this->getScProfile($request->sc_profile);
        }
        $photo = \Image::make($request->photo);
        $cover = \Image::make($request->cover);
        $coverSm = \Image::make($request->cover);
        $cover->resize(1920, 300, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $coverSm->resize(330, 120);
        $photo->resize(200, 200);
        $coverUrl = 'images/artist/cover/'.str_random(20).'.jpg';
        $coverSmUrl = 'images/artist/cover_sm/'.str_random(20).'.jpg';
        $photoUrl = 'images/artist/photo/'.str_random(20).'.jpg';
        $cover->save(public_path($coverUrl));
        $coverSm->save(public_path($coverSmUrl));
        $photo->save(public_path($photoUrl));
        $charities = implode(',', $request->charities);
        $artist = new Artist([
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

    public function getScProfile($str)
    {
        $data =[];
        $icons = Icon::all();
        foreach (explode(",", $str) as $k => $s) {
            $checkHttp = Str::startsWith($s, ['http://', 'https://']);
            $scp = $s;
            if(!$checkHttp){
                $scp = 'http://'.$s;
            }
            $parse = parse_url($scp);
            $host = $parse['host'];
            $url = Str::after($host, 'www.');
            $id = $icons->where('url', $url)->first();
            if($id){
                $data[] = [
                    'id' => $id->id,
                    'url' => $scp
                ];
            }

        }
        return json_encode($data);
    }

    public function CreateAsset(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3',
            'rights' => 'required',
            'terms' => 'required',
            'file' => 'required|max:300000',
        ]);
        $property = array();
        foreach($request->property as $k => $prop) {
            if($prop != null && $request->value[$k] != null){
                $property[$prop] = $request->value[$k];
            }
        }
        $file = explode(".",$request->file);
        $ext = $file[1];
        $asset = new Asset([
            'user_id' => auth()->id(),
            'name' => $request->name,
            'file' => 'img/assets/original/' . $request->file,
            'small_file' => 'img/assets/small/' . $request->file,
            'description' => $request->description,
            'properties' => $property,
            'ext' => $ext,
        ]);
        $asset->save();
        // return $request->all();
        return redirect('Admin/ArtistAssets');
    }

    public function AssetUpload(Request $r)
    {
        if($r->hasFile('file')){
            $small = \Image::make($r->file('file'));
            $small->resize(300, 300, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $file = $r->file('file');
            $original_name = $file->getClientOriginalName();
            $ext = strtolower(\File::extension($original_name));
            $rand = str_random(10);
            $random_name = time().'_'.$rand.'.'.$ext;
            $path = public_path().'/img/assets/original/';
            $file->move($path, $random_name);
            $smallUrl = 'img/assets/small/'.$random_name;
            $small->save(public_path($smallUrl));
            return $random_name;
        }
        return 'No File';
    }

    public function AssetRemove(Request $r)
    {
        if(\File::exists(public_path($r->name))){
            \File::delete(public_path($r->name));
        }
        return $r->name;
    }
    public function getArtistProfile()
    {
        return \Auth::user()->profile;
    }
    public function getArtistAssets()
    {
        return \Auth::user()->assets;
    }
}
