<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{edit_product ? 'Update Product' : 'New Product'}}</h4>

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
                                <button type="button" class="btn btn-outline-danger" @click="cancel">Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['edit'],
        data(){
            return{
                form:{
                    name:'',
                    category_id:'',
                    price:'',
                    quantity:''
                },
                categories:[],
                product_id:null,
                edit_product:this.edit
            }
        },
        created(){
            this.listen();
          this.getCategories();
        },
        methods:{
            saveProduct(){
                this.edit_product ? this.update() : this.save();

            },
            save(){
                axios.post('products',this.form)
                    .then(res => eventBus.$emit('listProducts',res.data))
                    .catch(error => error.response)
            },
            update(){
                let product ={
                    id:this.product_id,
                    name: this.form.name,
                    category_id: this.form.category_id,
                    price: this.form.price,
                    quantity: this.form.quantity
                };
                axios.patch(`products/${this.product_id}`,product)
                    .then(res => {
                        this.edit_product = false;
                        eventBus.$emit('listProducts',res.data);
                    })
                    .catch(error => error.response)
            },
            getCategories(){
                axios.get('categories')
                    .then(res => this.categories=res.data)
                    .catch(error => console.log(error.response))
            },
            listen(){
                if (this.edit){
                    this.form.name = this.$store.state.product.name
                    this.form.category_id = this.$store.state.product.category_id
                    this.form.price = this.$store.state.product.price
                    this.form.quantity = this.$store.state.product.quantity
                    this.product_id = this.$store.state.product.id

                }
            },
            cancel(){
                eventBus.$emit('cancel')
            }
        }
    }
</script>

<style scoped>

</style>
