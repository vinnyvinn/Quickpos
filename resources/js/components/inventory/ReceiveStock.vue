<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Receive Stock</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="receiveStock">
                                <div class="form-group">
                                <label for="category">Product</label>
                                <select id="category" class="form-control" v-model="form.product_id" required>
                                    <option v-for="product in products" :value="product.id">{{product.name}}</option>
                                </select>
                            </div>
                                <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input type="number" v-model="form.quantity" class="form-control" id="quantity" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
          products:[],
          form:{
              product_id:'',
              quantity:''
          }
            }
        },
        created(){
            this.getProducts();
        },
        methods:{
            receiveStock(){
             axios.post('inventory',this.form)
                 .then(res => this.$router.push('/inventory'))
                 .catch(error => console.log(error.response))
            },
            getProducts(){
                axios.get('products')
                    .then(res => this.products = res.data)
                    .catch(error => error.response)
            }
        }
    }
</script>

<style scoped>

</style>
