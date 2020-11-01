<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserAdminRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

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
     * @param UserAdminRequest $request
     * @return Response
     */

    public function store(UserAdminRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        event(new Registered(User::create($data)));

        return response(['data' => 'ok'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return User
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserAdminRequest $request
     * @param User $user
     * @return Response
     */
    public function update(UserAdminRequest $request, User $user)
    {
        $data = $request->validated();
        if (filled($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']);
        }
        $user->update($data);

        return response(['data' => 'ok'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function destroy(Request $request)
    {
        $request->validate(['users' => 'required', 'users.*' => 'required']);
        User::destroy($request->users);
        return response(['data' => 'ok'], 200);


    }
}
