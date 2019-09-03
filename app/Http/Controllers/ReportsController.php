<?php

namespace App\Http\Controllers;

use App\PettyCash;
use App\PurchaseOrder;
use Carbon\Carbon;
use App\Order;
use Helpers\Reports;
use Illuminate\Http\Request;


class ReportsController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }
    public function index(Request $request)
    {
        $from = Carbon::parse($request->from)->startOfDay()->format('Y-m-d H:m:s');
        $to = Carbon::parse($request->to)->endOfDay()->format('Y-m-d H:m:s');
        $orders =  Reports::init()->getSales(Order::whereBetween('created_at',[$from,$to])->get());
        return response()->json($orders);


    }

    public function pettyCash(Request $request)
    {
        $from = Carbon::parse($request->from)->startOfDay()->format('Y-m-d H:m:s');
        $to = Carbon::parse($request->to)->endOfDay()->format('Y-m-d H:m:s');
        $data =  Reports::init()->getpettyCash(PettyCash::whereBetween('created_at',[$from,$to])->get());
        return response()->json($data);
    }
    public function po(Request $request)
    {
        $from = Carbon::parse($request->from)->startOfDay()->format('Y-m-d H:m:s');
        $to = Carbon::parse($request->to)->endOfDay()->format('Y-m-d H:m:s');
        $data =  Reports::init()->getPos(PurchaseOrder::whereBetween('created_at',[$from,$to])->get());
        return response()->json($data);
    }
}
