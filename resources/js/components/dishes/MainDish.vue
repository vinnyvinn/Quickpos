<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Main Dish</h4>

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
    import { eventBus } from '../../app';
    export default {
        data(){
            return{
                dishes:[],
                item:'item.png',
                cart:{
                    items:[]
                }
            }
        },
        computed:{
            total(){
           return this.$store.getters.cartTotal;
            },
            cartTotal(){
                let total=0;
                this.cart.items.forEach(item =>{
                    total +=item.product.price*item.quantity;
                });

                return total;
            },
            cartItems(){
              return this.$store.getters.cartItems;
            },
            totalQ(){
              return this.$store.getters.totalQuantity;
            }

        },
    created(){
         this.getDishes();
    },
        methods:{
            getDishes(){
             axios.get('dishes')
                 .then(res => this.dishes = res.data)
                .catch(error => error.response)
            },
            addProductToCart(product,quantity){
                this.$store.dispatch('addProductToCart',{
                    product:product,
                    quantity:quantity,
                    available_qty:product.quantity
                }).then(res => console.log('success'));
            },
            }
    }
</script>

<style>
.order{
    margin-top: 0;
    font-weight: bold;
    font-size: 12px;
}
    .item_pic{
        margin: 1px;
    }

</style>
