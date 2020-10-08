<?php

namespace App\Http\Controllers\Draft;

use App\Http\Controllers\Controller;
use App\Http\Requests\DraftRequest;
use App\Models\Draft;
use Illuminate\Support\Str;

class DraftController extends Controller
{

    public function store(DraftRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = $request->user()->id;
        $data['link'] = Str::random(7);

        $draft = Draft::create($data);

        return response([
            'link' => '/drafts/' . $draft->link
        ], 200);
    }


    public function update(DraftRequest $request, Draft $draft)
    {
        $data = $request->validated();
        $draft = $draft->update($data);
        return response(['data' => 'ok'], 200);
    }

    public function show(Draft $draft)
    {
        $this->authorize('show',$draft);
        return $draft;
    }


}
