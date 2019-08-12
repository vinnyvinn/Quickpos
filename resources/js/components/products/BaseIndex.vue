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
                                <a class="nav-link active" id="pills-main-tab" data-toggle="pill" href="#pills-main" role="tab" aria-controls="pills-main" aria-selected="true">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-drinks-tab" data-toggle="pill" href="#pills-drinks" role="tab" aria-controls="pills-drinks" aria-selected="false">Categories</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab">
                                <app-products></app-products>
                            </div>
                            <div class="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
                                <app-categories></app-categories>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Products from "./Products";
    import Categories from "../categories/Categories";

    export default {

        components:{
            'app-products':Products,
            'app-categories':Categories
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
