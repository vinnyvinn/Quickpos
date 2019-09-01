<?php

namespace App\Http\Controllers;

use App\Http\Resources\PettyCashResource;
use App\PettyCash;
use Illuminate\Http\Request;

class PettyCashController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function index()
    {
        return response()->json(PettyCashResource::collection(PettyCash::get()));
}
     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $petty = PettyCash::create($request->all());
        return response(new PettyCashResource(PettyCash::find($petty->id)));
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PettyCash  $pettyCash
     * @return \Illuminate\Http\Response
     */
    public function edit(PettyCash $pettyCash)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PettyCash  $pettyCash
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PettyCash $pettyCash)
    {
        PettyCash::find($request->id)->update($request->all());
        return response()->json(new PettyCashResource(PettyCash::find($request->id)));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PettyCash  $pettyCash
     * @return \Illuminate\Http\Response
     */
    public function destroy(PettyCash $pettyCash)
    {
        //
    }
}
