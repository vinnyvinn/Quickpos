<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                    <h4 class="card-title">{{edit_customer ? 'Update Customer' : 'New Customer'}}</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="saveCustomer">
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
               customer_id:null,
                edit_customer:this.edit
            }
        },
        created(){
            this.listen();

        },
        methods:{
            saveCustomer(){
                this.edit_customer ? this.update() : this.save();
            },
            save(){
                axios.post('customers',this.form)
                    .then(res => eventBus.$emit('listCustomers',res.data))
                    .catch(error => error.response)
            },
            update(){
                let customer ={
                    id:this.customer_id,
                    name: this.form.name,
                    phone: this.form.phone,
                    email: this.form.email,
                    address: this.form.address
                };
                axios.patch(`customers/${this.customer_id}`,customer)
                    .then(res => {
                        this.edit_customer = false;
                        eventBus.$emit('updateCustomers',res.data);
                    })
                    .catch(error => error.response)
            },
            listen(){
                if (this.edit){
                    this.form.name = this.$store.state.customer.name
                    this.form.phone = this.$store.state.customer.phone
                    this.form.email = this.$store.state.customer.email
                    this.form.address = this.$store.state.customer.address
                    this.customer_id = this.$store.state.customer.id
                }
            },
            cancel(){
                eventBus.$emit('cancelCust')
            }
        }
    }
</script>

<style scoped>

</style>
