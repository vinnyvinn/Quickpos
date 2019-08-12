<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Product</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateProduct">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="category">Category</label>
                                <select id="category" class="form-control" v-model="form.category_id" required>
                                    <option v-for="category in categories" :value="category.id">{{category.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" v-model="form.price" class="form-control" id="price" required>
                            </div>
                            <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input type="number" v-model="form.quantity" class="form-control" id="quantity" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>

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
            return {
                form:{
                    name:'',
                    category_id:'',
                    price:'',
                    quantity:''
                },
                categories:[],
                product:{}
            }
       },
        created(){
           this.getProduct();
          this.getCategories();
        },
    methods:{
            getCategories(){
                axios.get('categories').then(res => this.categories = res.data)
                    .catch(error => console.log(error.response));
            },
        getProduct(){
            axios.get('products/'+this.$route.params.id)
                .then(res =>{
                            this.form.name = res.data.name,
                            this.form.category_id = res.data.category_id,
                            this.form.price = res.data.price,
                            this.form.quantity = res.data.quantity
                });
            },
        updateProduct(){
                this.product = {
                    name:this.form.name,
                    category_id:this.form.category_id,
                    price:this.form.price,
                    quantity:this.form.quantity,
                    id:this.$route.params.id
                };
                axios.post('update-product',this.product)
                    .then(res => console.log(res))
                    .catch(error => console.log(error.response))
        },

    },

    }
</script>

<style scoped>

</style>
