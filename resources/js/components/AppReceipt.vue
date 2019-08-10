<template>
         <div>
             <div id="invoice-POS">
                 <center id="top">
                     <div><img :src="'/assets/images/'+logo" alt="" class="logo" style="height: 60px;width: 60px"></div>
                     <div class="info">
                         <h2>Quick POS</h2>
                     </div>
                 </center>
                 <div id="mid">
                     <div class="info">
                         <h2>Contact Info</h2>
                         <p>
                             Address : street city, state 0000<br>
                             Email   : JohnDoe@gmail.com <br>
                             Phone   : 555-555-5555 <br>
                         </p>
                     </div>
                 </div>
                 <div id="bot">
                    <div id="table">
                         <table class="table table-striped">
                             <tr class="tabletitle">
                                 <th>Item</th>
                                 <th>Qty</th>
                                 <th>Sub Total</th>
                             </tr>
                             <tr class="service" v-for="item in orderedItems">
                                 <td>{{item.product.name}}</td>
                                 <td>{{item.quantity}}</td>
                                 <td>{{ item.product.price * item.quantity | currency}}</td>
                             </tr>
                             <tr class="tabletitle">
                                 <td></td>
                                 <td class="Rate"><p><b>Total</b></p></td>
                                 <td class="payment"><p><b>{{cartTotal | currency}}</b></p></td>
                             </tr>
                             <tr class="tabletitle">
                                 <td></td>
                                 <td><p><b>Paid</b></p></td>
                                 <td><p><b>{{paid | currency}}</b></p></td>
                             </tr>
                             <tr class="tabletitle">
                                 <td></td>
                                 <td><p><b>Balance</b></p></td>
                                 <td><p><b>{{ balance | currency}}</b></p></td>
                             </tr>
                         </table>
                     </div><!--End Table-->
                     <div id="legalcopy">
                         <p class="legal"><strong>Thank you for your business!</strong> 
                         </p>
                     </div>
                 </div><!--End InvoiceBot-->
             </div><!--End Invoice-->
         </div>
</template>
<script>
    import { mapGetters} from 'vuex';
    export default {
        data(){
            return {
                logo:'logo1.png'
            }
        },
        computed:{
            ...mapGetters(['orderedItems','cartTotal']),
            balance(){
                return this.$store.state.balance;
            },
            paid(){
                return this.$store.state.amountPaid;
            }
        },
        mounted() {
          this.generateReceipt();
        },
      methods:{
          generateReceipt(){
              this.$htmlToPaper('invoice-POS', () => {
                  this.$router.push('/sale');
              });
          }
      }
    }
</script>

<style scoped>


</style>
