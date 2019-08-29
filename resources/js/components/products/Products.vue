<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                       <h4 class="card-title" v-if="!add_product">Products</h4>
                       <button class="btn btn-primary" @click="add_product=true" v-if="!add_product">Add Product</button>
                    </div>
                    <div class="card-body">
                        <add-product v-if="add_product" :edit="editing"></add-product>
                        <div v-if="!add_product">
                            <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="product in tableData">
                                <td>{{product.id}}</td>
                                <td>{{product.name}}</td>
                                <td>{{product.category}}</td>
                                <td>{{product.price | currency}}</td>
                                <td>{{product.quantity}}</td>
                                 <td>
                                  <button class="btn btn-success btn-sm" @click="editMode(product)"><i class="fa fa-edit"></i></button>
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
    </div>

</template>

<script>
    import AddProduct from "./AddProduct";

    export default {
        data() {
            return {
                  tableData: [],
                  add_product:false,
                  editing:false
                 }
        },
        created() {
         this.listen();
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
           axios.delete(`products/${id}`)
               .then(res => {
                   for (let i=0;i<this.tableData.length;i++){
                       if (this.tableData[i].id == res.data){
                           this.tableData.splice(i,1);
                       }
                   }
               })
               .catch(error => console.log(error.response))
            },
            initDatatable(){
                setTimeout(()=>{
                    $('.walla').DataTable();
                },300)
            },
            listen(){
                eventBus.$on('listProducts',(product) =>{
                    this.tableData.unshift(product);
                    this.add_product =false;
                });
                eventBus.$on('cancel',()=>{
                    this.add_product = false;
                    this.editing = false;
                })
            },
            editMode(product){
                    this.$store.dispatch('updateProduct',product)
                    .then(() =>{
                        this.editing=true;
                        this.add_product=true;
                    })
            }
        },
    components:{
            AddProduct
    }
    }
</script>

<style scoped>

</style>
