<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{edit_supplier ? 'Update Supplier' : 'New Supplier'}}</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="saveSupplier">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" v-model="form.phone" class="form-control" id="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="form.email" class="form-control" id="email" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" v-model="form.address" class="form-control" id="address" required>
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
                    address:'',
                    phone:'',
                    email:''
                },
                suppliers:[],
                supllier_id:null,
                edit_supplier:this.edit
            }
        },
        created(){
            this.listen();
            this.getSuppliers();
        },
        methods:{
            saveSupplier(){
                this.edit_supplier ? this.update() : this.save();

            },
            save(){
                axios.post('suppliers',this.form)
                    .then(res => eventBus.$emit('listSuppliers',res.data))
                    .catch(error => error.response)
            },
            update(){
                let suplier ={
                    id:this.supllier_id,
                    name: this.form.name,
                    phone: this.form.phone,
                    email: this.form.email,
                    address: this.form.address
                };
                axios.patch(`suppliers/${this.supllier_id}`,suplier)
                    .then(res => {
                        this.edit_supplier = false;
                        eventBus.$emit('updateSuppliers',res.data);
                    })
                    .catch(error => error.response)
            },
            getSuppliers(){
                axios.get('suppliers')
                    .then(res => this.suppliers=res.data)
                    .catch(error => console.log(error.response))
            },
            listen(){
                if (this.edit){
                    this.form.name = this.$store.state.supplier.name
                    this.form.phone = this.$store.state.supplier.phone
                    this.form.email = this.$store.state.supplier.email
                    this.form.address = this.$store.state.supplier.address
                    this.supllier_id = this.$store.state.supplier.id

                }
            },
            cancel(){
                eventBus.$emit('cancelSupp')
            }
        }
    }
</script>

<style scoped>

</style>
