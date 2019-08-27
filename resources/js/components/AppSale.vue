<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Menu
                            <button class="btn btn-primary float-right" @click="viewCart"><i class="fa fa-eye"></i>View Order({{cartItems}})</button>
                        </h4>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-main-tab" data-toggle="pill" href="#pills-main" role="tab" aria-controls="pills-main" aria-selected="true">Main Dish</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-drinks-tab" data-toggle="pill" href="#pills-drinks" role="tab" aria-controls="pills-drinks" aria-selected="false">Drinks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-fruits-tab" data-toggle="pill" href="#pills-fruits" role="tab" aria-controls="pills-fruits" aria-selected="false">Fruits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-snacks-tab" data-toggle="pill" href="#pills-snacks" role="tab" aria-controls="pills-snacks" aria-selected="false">Snacks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-specials-tab" data-toggle="pill" href="#pills-specials" role="tab" aria-controls="pills-specials" aria-selected="false">Specials</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-main" role="tabpanel" aria-labelledby="pills-main-tab">
                                <main-dish></main-dish>
                            </div>
                            <div class="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
                                <app-drinks></app-drinks>
                            </div>
                            <div class="tab-pane fade" id="pills-fruits" role="tabpanel" aria-labelledby="pills-fruits-tab">
                                <app-fruits></app-fruits>
                            </div>
                            <div class="tab-pane fade" id="pills-snacks" role="tabpanel" aria-labelledby="pills-snacks-tab">
                                <app-snacks></app-snacks>
                            </div>
                            <div class="tab-pane fade" id="pills-specials" role="tabpanel" aria-labelledby="pills-specials-tab">
                                <app-specials></app-specials>
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
    import MainDish from "./dishes/MainDish";
    import Fruits from "./dishes/Fruits";
    import Specials from "./dishes/Specials";
    import Snacks from "./dishes/Snacks";
    import Drinks from "./dishes/Drinks";

    import { mapGetters } from 'vuex';

    export default {
          computed:{
             ...mapGetters(['cartItems'])
         },

        components:{
            'main-dish':MainDish,
            'app-fruits':Fruits,
            'app-specials':Specials,
            'app-snacks':Snacks,
            'app-drinks':Drinks
        },
        methods:{
            viewCart(){
            this.$router.push('/order-details')

            }
        }
    }
</script>

<style scoped>

</style>
