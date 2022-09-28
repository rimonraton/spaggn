<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MessageCardInfo;

class MessageInfoController extends Controller
{
    public function index()
    {
        $msg = MessageCardInfo::all();
        return response()->json($msg);
    }
}
