<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">

                        </h4>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-main-tab" data-toggle="pill" href="#pills-main" role="tab" aria-controls="pills-main" aria-selected="true">All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-drinks-tab" data-toggle="pill" href="#pills-drinks" role="tab" aria-controls="pills-drinks" aria-selected="false">Types</a>
                            </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab">
                                <app-petty-cash></app-petty-cash>
                            </div>
                            <div class="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
                                <app-petty-cash-types></app-petty-cash-types>
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
   import Index from "./Index";
   import IndexTypes from "./types/Index";

   export default {

        components:{
        'app-petty-cash':Index,
        'app-petty-cash-types':IndexTypes
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
