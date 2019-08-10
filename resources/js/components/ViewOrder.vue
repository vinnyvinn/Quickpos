<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Order details</h4>
                    </div>
                    <div class="card-body">
                        <table v-if=" cartItems > 0" class="table table-striped">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in orderedItems">
                                <td>{{ item.product.name }}</td>
                                <td>
                                    {{ item.quantity }} &nbsp;
                                    <button class="btn btn-success" @click="increaseQuantity(item.product)">+</button>
                                    <button class="btn btn-danger" @click="decreaseQuantity(item.product)">-</button>
                                </td>
                                <td>{{ item.quantity * item.product.price | currency }}</td>
                            </tr>
                            <tr>
                                <td class="text-right" colspan="2">
                                    <strong>Total</strong>
                                </td>
                                <td>{{ cartTotal | currency }}</td>
                              <span v-if="show_balance">
                                <td class="text-right" colspan="2">
                                    <strong>Balance</strong>
                                </td>
                                <td>{{ balance | currency }}</td>
                              </span>
                            </tr>
                               <tr>
                                <td colspan="2"></td>
                                   <td><button class="btn btn-info" @click="show=true" v-if="!show">Pay Now</button></td>
                                   <input type="number" class="form-control" v-model="amount" v-if="show" placeholder="enter amount" style="margin-top: 15px">
                                <td><button class="btn btn-success" @click="checkout" :disabled="amount < cartTotal">Checkout</button></td>
                            </tr>



                            </tbody>
                        </table>
                        <p v-else>Your cart is currently empty.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data(){
          return{
            show:false,
              amount:'',
              show_balance:false
          }
        },
   computed:{
       ...mapGetters(['cartItems','orderedItems','cartTotal']),
       balance(){
           return this.$store.state.balance;
       },
      paid(){
           return this.$store.state.amountPaid;
      }
   },
        watch:{
            amount(){
                if (this.amount >=this.cartTotal){
                    this.show_balance = true;
                    this.$store.dispatch('amountPaid',this.amount);
                }
                else {
                    this.show_balance =false;
                }
            }
        },
        methods:{
            increaseQuantity(item){
                this.$store.dispatch('updateCart',{
                    product:item,
                    quantity:1
                });
            },
            decreaseQuantity(item){
                this.$store.dispatch('updateCart',{
                    product:item,
                    quantity:-1
                });
            },
            checkout(){
            this.$router.push('/print-receipt');
               // axios.get('http://localhost:8000/api/orders')
            }
        }
    }
</script>

<style scoped>

</style>
