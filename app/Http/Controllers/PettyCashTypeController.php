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
        PettyCashType::create($request->all());
        return response('success');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PettyCashType  $pettyCashType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      return response()->json(PettyCashType::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PettyCashType  $pettyCashType
     * @return \Illuminate\Http\Response
     */
    public function edit(PettyCashType $pettyCashType)
    {
        //
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
        return response('updated');
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
