<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">

                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Products</h4>
                        <button class="btn btn-primary" @click="addProduct">Add Product</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="product in tableData">
                                <td>{{product.id}}</td>
                                <td>{{product.name}}</td>
                                <td>{{product.price | currency}}</td>
                                <td>{{product.quantity}}</td>
                                <td>
                                    <router-link :to="{name:'product-edit',params:{id:product.id}}">
                                        <button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button>
                                    </router-link>
                                    <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)"><i class="fa fa-trash"></i></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                       </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                  tableData: [],
                 }
        },
        created() {
         this.getCategories();
        },
        mounted(){
     this.initDatatable();
        },
        methods:{
            getCategories(){
                axios.get('products')
                    .then(res => this.tableData = res.data)
                    .catch(error => console.log(error.response))
            },
            addProduct(){
                this.$router.push('/add-product');
            },
            deleteProduct(id){
           axios.post('delete-product',{id:id})
               .then(res => this.$router.go())
               .catch(error => console.log(error.response))
            },
            initDatatable(){
                setTimeout(()=>{
                    $('.walla').DataTable();
                },300)
            },
        }

    }
</script>

<style scoped>

</style>
