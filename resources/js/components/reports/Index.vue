<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">
                         Reports
                        </h4>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-main-tab" data-toggle="pill" href="#pills-main" role="tab" aria-controls="pills-main" aria-selected="true">Sales</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-petty-tab" data-toggle="pill" href="#pills-petty" role="tab" aria-controls="pills-petty" aria-selected="false">Petty Cash</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-po-tab" data-toggle="pill" href="#pills-po" role="tab" aria-controls="pills-po" aria-selected="false">Purchase Order</a>
                            </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab">
                                <app-sales></app-sales>
                            </div>
                            <div class="tab-pane fade" id="pills-petty" role="tabpanel" aria-labelledby="pills-petty-tab">
                                <app-petty-cash></app-petty-cash>
                            </div>
                            <div class="tab-pane fade" id="pills-po" role="tabpanel" aria-labelledby="pills-po-tab">
                                <app-purchase-order></app-purchase-order>
                            </div>


                        </div>

                    </div>
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import PettyCash from "./pettycash/PettyCash";
    import PurchaseOrder from "./po/PurchaseOrder";
    import Sales from "./sales/Sales";

    export default {

        components:{
            'app-petty-cash':PettyCash,
            'app-purchase-order':PurchaseOrder,
            'app-sales':Sales
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
