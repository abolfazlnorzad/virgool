<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function __invoke(Request $request, User $user)
    {
        $request->user()->follows()->toggle($user->id);
        return response(['data'],200);
    }
}
