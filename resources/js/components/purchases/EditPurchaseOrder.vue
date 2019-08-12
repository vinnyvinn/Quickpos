<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit PurchaseOrder</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updatePurchaseOrder">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea name="description" id="description" v-model="form.description" cols="30" rows="10" class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" v-model="form.price" class="form-control" id="price" required>
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
                    description:'',
                    price:''
                },
                po:{}
            }
        },
        created(){
          this.getPo();
        },
        methods:{
            updatePurchaseOrder(){
                this.po = {
                  name: this.form.name,
                  description: this.form.description,
                  price: this.form.price,
                  id: this.$route.params.id
                };
                axios.post('update-po',this.po)
                    .then(res => this.$router.push('/pos'))
                    .catch(error => error.response)

            },
            getPo(){
                axios.get('purchases/'+this.$route.params.id)
                    .then(res =>{
                        this.form.description =res.data.description;
                        this.form.name = res.data.name;
                        this.form.price = res.data.price
                    });
            }
        }
    }
</script>

<style scoped>

</style>
