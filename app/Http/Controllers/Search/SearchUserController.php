<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SearchUserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('name', 'LIKE', "%{$request->q}%")
            ->orWhere('username', 'LIKE', "%$request->q%")
            ->simplePaginate(10);
         $users->map(function ($user) {
            $user->append('is_follows');
        });

        return response([
            'users' => $users
        ], 200);

    }
}
