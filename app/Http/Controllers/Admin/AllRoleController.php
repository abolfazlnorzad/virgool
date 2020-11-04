<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class AllRoleController extends Controller
{
    public function index(Request $request)
    {
        return response(Role::all(),200);
    }
}
