<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return response([
            'items' => Role::sortFromRequest()->search()->paginate($request->per_page ?? 10),
            'headers' => Role::getHeaderFildes(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $request->validate(['name' => 'required']);
        Role::create($request->only('name'));
        return response(['data' => 'ok'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Role $role
     * @return Role
     */
    public function show(Role $role)
    {
        return $role;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Role $role
     * @return void
     */
    public function update(Request $request, Role $role)
    {
        $request->validate(['name' => 'required']);
        $role->update($request->only('name'));
        return response([
            'data' => 'ok'
        ], 200);
    }

}
