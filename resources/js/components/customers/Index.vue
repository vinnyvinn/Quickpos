<template>
    <div class="content">
        <app-create v-if="add_customer" :edit="editing"></app-create>
        <div class="row" v-if="!add_customer">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Customers</h4>
                        <button class="btn btn-primary" @click="add_customer=true">Add Customer</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="customer in tableData">
                                <td>{{customer.id}}</td>
                                <td>{{customer.name}}</td>
                                <td>{{customer.phone}}</td>
                                <td>{{customer.email}}</td>
                                <td>{{customer.address}}</td>
                                <td>
                                    <button class="btn btn-success btn-sm" @click="editMode(customer)"><i class="fa fa-edit"></i></button>
                                    <button class="btn btn-danger btn-sm" @click="deleteSupplier(customer.id)"><i class="fa fa-trash"></i></button>
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


    import Create from "./Create";

    export default {
        data() {
            return {
                tableData: [],
                add_customer:false,
                editing:false
            }
        },
        created() {
            this.listen();
            this.getCustomers();
        },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getCustomers(){
                axios.get('customers')
                    .then(res => this.tableData = res.data)
                    .catch(error => Exception.handle(error))
            },

            deleteSupplier(id){
                axios.delete(`customers/${id}`)
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
                eventBus.$on('listCustomers',(customer) =>{
                    this.tableData.unshift(customer);
                    this.add_customer =false;
                    this.initDatatable();
                });
                eventBus.$on('cancelCust',()=>{
                    this.add_customer = false;
                    this.editing = false;
                });
                eventBus.$on('updateCustomers',(customer)=>{
                    this.add_customer = false;
                    this.editing = false;
                    for (let i=0;i<this.tableData.length;i++){
                        if (this.tableData[i].id == customer.id){
                            this.tableData.splice(i,1);
                        }
                    }
                    this.tableData.unshift(customer);
                    this.initDatatable();
                });
                eventBus.$on('removeCustomers',(ids) =>{
                    ids.filter((item) =>{
                        for (let i = 0;i<this.tableData.length;i++){
                            if (this.tableData[i].id == item.id){
                                this.tableData.splice(i,1);
                            }
                        }
                    })
                })
            },
            editMode(supplier){
                this.$store.dispatch('updateCustomer',supplier)
                    .then(() =>{
                        this.editing=true;
                        this.add_customer=true;
                    })
            }
        },
        components:{
            'app-create':Create
        }
    }
</script>

<style scoped>

</style>
