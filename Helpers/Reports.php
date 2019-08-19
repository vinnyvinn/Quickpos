<?php
namespace Helpers;
use Carbon\Carbon;
class Reports
{
static function init(){
    return new self();
}

    public function getSales($data)
    {
       return collect($data)->map(function ($item){
           return [
               'id' => $item['id'],
               'product' => $item->product['name'],
               'category' => $item->product->category['name'],
               'price' => $item->product['price'],
               'quantity' => $item['quantity'],
               'total' => $item['total'],
               'created' => Carbon::parse($item['created_at'])->format('d/m/Y'),
           ];
        });

}
    public function getpettyCash($data)
    {
        return collect($data)->map(function ($item){
            return [
                'id' => $item['id'],
                'pettycash' => $item['name'],
                'type' => $item->type['name'],
                'cost' => $item['amount'],
               'created' => Carbon::parse($item['created_at'])->format('d/m/Y'),
            ];
        });

    }
    public function getPos($data)
    {
        return collect($data)->map(function ($item){
            return [
                'id' => $item['id'],
                'name' => $item['name'],
                'description' => $item['description'],
                'price' => $item['price'],
                'created' => Carbon::parse($item['created_at'])->format('d/m/Y'),
            ];
        });

    }
}
