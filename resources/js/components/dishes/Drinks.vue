<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Drinks</h4>

                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3" v-for="dish in dishes">
                                <strong>{{dish.name}}</strong>
                                <p class="item_pic"> <img :src="'/assets/images/'+item" alt=""></p>
                                <button class="btn btn-info order" @click="addProductToCart(dish,1)">Order Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['categor_id'],
        data(){
            return{
                dishes:[],
                item:'item.png'
            }
        },
        created(){
         this.getDishes();
        },
        methods:{
            getDishes(){
                axios.get(`get-products/${this.categor_id}`)
                    .then(res => {
                         this.dishes = res.data
                    })
                    .catch(error => error.response)
            },
            addProductToCart(product,quantity){
                this.$store.dispatch('addProductToCart',{
                    product:product,
                    quantity:quantity,
                    available_qty:product.quantity
                });
            },
        }
    }
</script>

<style scoped>

</style>
