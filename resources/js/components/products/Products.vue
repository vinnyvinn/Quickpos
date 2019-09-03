<template>
    <div>
        <add-product v-if="add_product" :edit="editing"></add-product>
    <div class="content" v-if="!add_product">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                       <h4 class="card-title">Products</h4>
                       <button class="btn btn-primary" @click="add_product=true">Add Product</button>
                    </div>
                    <div class="card-body">
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
         this.getProducts();
        },
        mounted(){
     this.initDatatable();
        },
        methods:{
               getProducts(){
                axios.get('products')
                    .then(res => this.tableData = res.data)
                    .catch(error => Exception.handle(error))
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
                    this.initDatatable();
                });
                eventBus.$on('cancel',()=>{
                    this.add_product = false;
                    this.editing = false;
                });
                eventBus.$on('updateProducts',(product)=>{
                    this.add_product = false;
                    this.editing = false;
                    for (let i=0;i<this.tableData.length;i++){
                        if (this.tableData[i].id == product.id){
                            this.tableData.splice(i,1);
                        }
                    }
                    this.tableData.unshift(product);
                    this.initDatatable();
                });
                eventBus.$on('removeProducts',(ids) =>{
                   ids.filter((item) =>{
                       for (let i = 0;i<this.tableData.length;i++){
                           if (this.tableData[i].id == item.id){
                               this.tableData.splice(i,1);
                              }
                       }
                   })
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
