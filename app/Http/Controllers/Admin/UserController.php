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

        $per_page = (int)$request->per_page ?? 10;


        $users = User::withCount('posts')
            ->sortFromRequest()
            ->search()
            ->paginate($per_page);
        $headers = User::getHeaderFildes();
        return response([
            'items' => $users,

            'headers' => $headers,
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
        $request->validate(['items' => 'required', 'items.*' => 'required']);
        User::destroy($request->items);
        return response(['data' => 'ok'], 200);


    }
}
