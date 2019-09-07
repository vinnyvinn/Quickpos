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
                                <a class="nav-link active" :id="'pills-'+category.id+'-tab'" data-toggle="pill" :href="'#pills-'+category.id" role="tab" :aria-controls="'pills-'+category.id" aria-selected="true">{{category.name}}</a>
                            </li>
                            <li class="nav-item" v-for="cat in categories" :key="cat.id">
                                <a class="nav-link" :id="'pills-'+cat.id+'-tab'" data-toggle="pill" :href="'#pills-'+cat.id" role="tab" :aria-controls="'pills-'+cat.id" aria-selected="false">{{cat.name}}</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" :id="'pills-'+category.id" role="tabpanel" :aria-labelledby="'pills-'+category.id+'-tab'">
                              <app-drinks :categor_id="1"></app-drinks>
                            </div>
                              <div class="tab-pane fade" v-for="prod in all_products" :id="'pills-'+prod.category_id" role="tabpanel" :aria-labelledby="'pills-'+prod.name+'-tab'">
                                <main-dish :cat_id="prod.category_id"></main-dish>
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
    import Drinks from "./dishes/Drinks";
    import { mapGetters } from 'vuex';

    export default {
        data(){
            return {
                categories: {},
                category: {},
                all_products: {}
            }
        },
          computed:{
             ...mapGetters(['cartItems'])
         },
        components:{
            'main-dish':MainDish,
            'app-drinks':Drinks
        },
         created(){
            this.getCategories();
            this.getCategory();
            this.allProducts();
            this.listen();
           },
        methods:{
            viewCart(){
            this.$router.push('/order-details')
            },
            getCategories(){
                axios.get('all-categories')
                    .then(res => this.categories = res.data)
                    .catch(error =>Exception.handle(error))
            },
            getCategory(){
                axios.get('categories/1')
                    .then(res => {
                        this.category = res.data
                        })
                    .catch(error => Exception.handle(error))
            },
            allProducts(){
                axios.get('all-products')
                    .then(res => this.all_products = res.data)
                    .catch(error => Exception.handle(error));
            },
            listen(){
                eventBus.$on('notify',()=>{
                    this.$toastr.e("Sorry you do not have enough stock for the selected product");
                })
            }
           }
    }
</script>

<style scoped>

</style>
