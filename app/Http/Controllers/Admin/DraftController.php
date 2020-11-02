<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Draft;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DraftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        return response([
            'items' => Draft::with('user')
                ->sortFromRequest()
                ->search()
                ->paginate($request->per_page ?? 10)
            ,
            'headers' => Draft::getHeaderFildes(),
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy(Request $request)
    {
        $request->validate(['items' => 'required', 'items.*' => 'required']);
        Draft::destroy($request->items);
        return response([
            'data' => 'ok'
        ], 200);
    }
}
