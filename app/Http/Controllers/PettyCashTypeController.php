<?php

namespace App\Http\Controllers;

use App\PettyCashType;
use Illuminate\Http\Request;

class PettyCashTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(PettyCashType::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $type = PettyCashType::create($request->all());
        return response()->json($type);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PettyCashType  $pettyCashType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PettyCashType $pettyCashType)
    {
        PettyCashType::find($request->id)->update($request->all());
        return response($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PettyCashType  $pettyCashType
     * @return \Illuminate\Http\Response
     */
    public function destroy(PettyCashType $pettyCashType)
    {
        //
    }
}
