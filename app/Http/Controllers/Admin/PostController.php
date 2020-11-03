<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response as ResponseAlias;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return ResponseAlias
     */
    public function index(Request $request)
    {
        return response([
            'items' => Post::with('user')->withCount(['comments','likes'])->sortFromRequest()->search()->paginate($request->per_page ?? 10),
            'headers' => Post::getHeaderFildes(),
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return ResponseAlias
     */
    public function destroy(Request $request)
    {
        $request->validate(['items' => 'required', 'items.*' => 'required']);
        Post::destroy($request->items);
        return response(['data' => 'ok'], 200);
    }
}
