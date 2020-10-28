<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $users_feilds = collect(User::$FIELDS);
        $sort_by = $users_feilds->keys()->contains($request->sort_by) ? $request->sort_by : 'id';
        $sort_type = $request->sort_type == 'asc' ? 'asc' : 'desc';
        $per_page = (int)$request->per_page ?? 10;


        $users = User::orderBy($sort_by, $sort_type)
            ->search($request->search)
            ->orWhere('name', 'LIKE', "%{$request->search}%")
            ->paginate($per_page);
        $headers = $users_feilds->transform(function ($item, $key) {
            return
                [
                    'text' => $item,
                    'value' => $key,
                ];
        });
        return response([
            'users' => $users,

            'headers' => $headers->values()->all(),
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function destroy(Request $request)
    {
        $request->validate(['users'=>'required','users.*'=>'required']);
        User::destroy($request->users);
        return response(['data'=>'ok'],200);


    }
}
