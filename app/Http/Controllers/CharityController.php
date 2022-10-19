<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Charity;
use Illuminate\Support\Str;

class CharityController extends Controller
{
    public function CharityProfileSave(Request $request)
    {
        // return $request->all();
        $request->validate([
            // 'name' => 'required|min:3',
            // 'email' => 'email:rfc,dns',
            'mission' => 'required|min:20',
            'address' => 'required|min:10',
            'coverPhoto' => 'required',
            'photo' => 'required',
        ]);
        // $sc_profile = null;
        // if($request->sc_profile) {
        //     $sc_profile = $this->getScProfile($request->sc_profile);
        // }

        $logoUrl = '';
        $coverUrl = '';
        // $coverSmUrl = '';
        if(file_exists($request->photo)){
            $logoUrl = $request->photo;
        } else {
            $logo = \Image::make($request->photo);
            $logo->resize(200, 200);
            $logoUrl = 'images/charity/photo/'.Str::random(12).'.jpg';
            $logo->save(public_path($logoUrl));
        }
        if(file_exists($request->coverPhoto)){
            $coverUrl = $request->coverPhoto;
        } else {
            $cover = \Image::make($request->coverPhoto);
            // $coverSm = \Image::make($request->coverPhoto);
            $cover->resize(1920, 300, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            // $coverSm->resize(330, 120);
            
            $coverUrl = 'images/charity/cover/'.Str::random(12).'.jpg';
            // $coverSmUrl = 'images/charity/cover_sm/'.Str::random(12).'.jpg';
            
            $cover->save(public_path($coverUrl));
            // $coverSm->save(public_path($coverSmUrl));
        }

        // $logo = \Image::make($request->photo);
        // $cover = \Image::make($request->coverPhoto);
        // $coverSm = \Image::make($request->coverPhoto);
        // $cover->resize(1920, 300, function ($constraint) {
        //     $constraint->aspectRatio();
        //     $constraint->upsize();
        // });
        // $coverSm->resize(330, 120);
        // $logo->resize(200, 200);
        // $coverUrl = 'images/charity/cover/'.Str::random(12).'.jpg';
        // $coverSmUrl = 'images/charity/cover_sm/'.Str::random(12).'.jpg';
        // $photoUrl = 'images/charity/photo/'.Str::random(12).'.jpg';
        // $cover->save(public_path($coverUrl));
        // $coverSm->save(public_path($coverSmUrl));
        // $logo->save(public_path($photoUrl));
        // $charity = new Charity([
            Charity::updateOrCreate(
            ['user_id' => auth()->user()->id],
            [
            'user_id' => auth()->user()->id,
            'organization_name' => $request->organizationName,
            'address' => $request->address,
            'primary_phone' => $request->primaryPhone,
            'primary_email' => $request->primaryEmail,
            'website_address' => $request->websiteAddress,
            'ein' => $request->ein,
            'causes' => json_encode($request->causes),
            'services' => json_encode($request->service),
            'mission' => $request->mission,
            'target_demographics' => $request->target_demographics,
            'geographic' => $request->geographic,
            'navigator_site' => $request->navigatorSite,
            'guide_star' => $request->guideStar,
            'rating_organizations' => json_encode($request->ratingOrganizations),
            'fund_raising' => $request->fundraising,
            'logo' => $logoUrl,
            'cover_photo' => $coverUrl,
            // 'cover_sm' => $coverSmUrl
        ]);
        // $charity->save();
        return 'success';
        // return $request->all();
        // return redirect('Admin/ArtistProfile');
    }

    public function getCharityProfile()
    {
        $profile = \Auth::user()->load('charityprofile');
        return response()->json($profile, 200);
    }
    public function getCharity()
    {
        $charities = Charity::with('user')->orderBy('id', 'desc')->paginate(8);
        return response()->json($charities, 200);
    }
}
