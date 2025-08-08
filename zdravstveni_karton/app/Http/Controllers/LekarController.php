<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pregled;

class LekarController extends Controller
{
    //
    public function pregledi ($id) {
        $pregledi = Pregled::where('lekar_id', $id)->get();
        return response()->json($pregledi);
    }
}
