<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Product</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="saveProduct">
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
                form:{
                    name:'',
                    category_id:'',
                    price:'',
                    quantity:''
                },
                categories:[]
            }
        },
        created(){
          this.getCategories();
        },
        methods:{
            saveProduct(){
                axios.post('http://localhost:8000/api/products',this.form)
                    .then(res => this.$router.push('/products'))
                    .catch(error => error.response)
            },
            getCategories(){
                axios.get('http://localhost:8000/api/categories')
                    .then(res => this.categories=res.data)
                    .catch(error => console.log(error.response))
            }
        }
    }
</script>

<style scoped>

</style>
