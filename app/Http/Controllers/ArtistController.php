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
        // return $request->all();
        $request->validate([
            // 'firstName' => 'required|min:3',
            // 'email' => 'email:rfc,dns',
            'personalStory' => 'required|min:20',
            'charities' => 'required',
            'coverPhoto' => 'required',
            'photo' => 'required',
        ]); 
        $photoUrl = '';
        $coverUrl = '';
        $coverSmUrl = '';
        if(file_exists($request->photo)){
            $photoUrl = $request->photo;
        } else {
            $photo = \Image::make($request->photo);
            $photo->resize(200, 200);
            $photoUrl = 'images/artist/photo/'.Str::random(12).'.jpg';
            $photo->save(public_path($photoUrl));
        }
        if(file_exists($request->coverPhoto)){
            $coverUrl = $request->coverPhoto;
        } else {
            $cover = \Image::make($request->coverPhoto);
            $coverSm = \Image::make($request->coverPhoto);
            $cover->resize(1920, 300, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $coverSm->resize(330, 120);
            
            $coverUrl = 'images/artist/cover/'.Str::random(12).'.jpg';
            $coverSmUrl = 'images/artist/cover_sm/'.Str::random(12).'.jpg';
            
            $cover->save(public_path($coverUrl));
            $coverSm->save(public_path($coverSmUrl));
        }
        $sc_profile = null;
        $social = collect($request->social)->implode('url', ',');
        if($request->social) {
            $sc_profile = $this->getScProfile($social);
        }
        $charities = collect($request->charities)->implode('id', ',');
        // $artist = new Artist([
        //     'user_id' => auth()->user()->id,
        //     'first_name' => $request->firstName,
        //     'last_name' => $request->lastName,
        //     'email' => $request->email,
        //     'sc_profile' => $sc_profile,
        //     'charities_data' => json_encode($request->charities),
        //     'personal_story' => $request->personalStory,
        //     'inspiration' => $request->inspiration,
        //     'message_to_world' => $request->messageToWorld,
        //     'charities' => $charities,
        //     'artistic_inspiration' => $request->artisticInspiration,
        //     'photo' => $photoUrl,
        //     'cover' => $coverUrl,
        //     'cover_sm' => $coverSmUrl
        // ]);
        // $artist->save();
        Artist::updateOrCreate(
            ['user_id' => auth()->user()->id],
            [
            'user_id' => auth()->user()->id,
            // 'first_name' => $request->firstName,
            // 'last_name' => $request->lastName,
            // 'email' => $request->email,
            'sc_profile' => $sc_profile,
            'charities_data' => json_encode($request->charities),
            'personal_story' => $request->personalStory,
            'inspiration' => $request->inspiration,
            'message_to_world' => $request->messageToWorld,
            'charities' => $charities,
            'artistic_inspiration' => $request->artisticInspiration,
            'photo' => $photoUrl,
            'cover' => $coverUrl,
            'cover_sm' => $coverSmUrl
            ]);
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
    //    return $request->all();
    //   return json_decode($request->propertyData, true);
        $assetFileUrl = '';
        $assetSM = '';
        $request->validate([
            'name' => 'required|min:3',
            'rights' => 'required',
            'terms' => 'required',
            'asset' => 'required',
        ]);
        $property = array();
        foreach(json_decode($request->propertyData, true) as $k => $prop) {
            $property[$prop['property']] = $prop['value'];
        }
        if($request->fileFormat == 'video') {
            $upload_path = public_path('videos/assets/');
            $fileName = time().'.'.$request->videosrc->getClientOriginalExtension();
            $request->videosrc->move($upload_path, $fileName);
            $assetFileUrl = 'videos/assets/'.$fileName;
        } else if($request->fileFormat == 'image') {
            $asset = \Image::make($request->asset);
            $assetSm = \Image::make($request->asset);
            $assetSm->resize(300, 300, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $assetSmUrl = 'img/assets/small/'.Str::random(12).'.'.$request->fileExtension;
            $assetUrl = 'img/assets/original/'.Str::random(12).'.'.$request->fileExtension;
            $assetSm->save(public_path($assetSmUrl));
            $asset->save(public_path($assetUrl));
            $assetFileUrl = $assetUrl;
            $assetSM = $assetSmUrl;
        } else {
            return 'others';
        }
        $artist = new Asset([
            'user_id' => auth()->user()->id,
            'name' => $request->name,
            'description' => $request->description,
            'file' => $assetFileUrl,
            'small_file' => $assetSM,
            'ext' => $request->fileExtension,
            'properties' => json_encode($property),
            'fileType' => $request->fileFormat,
        ]);
        $artist->save();
        return \Auth::user()->assets()->orderBy('id', 'desc')->paginate(5);
        // return redirect('Admin/ArtistProfile');
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
        // $profile = \Auth::user()->profile;
        $profile = \Auth::user()->load('profile', 'assets');
        return response()->json($profile, 200);
    }
    public function getArtistAssets()
    {
        return \Auth::user()->assets()->orderBy('id', 'desc')->paginate(5);
    }
    public function ImageRemove(Request $request)
    {
        // return $request->all();
        if(file_exists($request->file)){
            @unlink($request->file);
            Artist::where('user_id', auth()->user()->id)->update([
                $request->type => ''
            ]);
            return 'success';
            // return auth()->user()->id;
        }
    }
    public function getArtist()
    {
        $artists = Artist::with('user')->orderBy('id', 'desc')->paginate(8);
        return response()->json($artists, 200);
    }
}
