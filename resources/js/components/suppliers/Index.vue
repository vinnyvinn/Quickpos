<template>
         <div class="content">
            <app-create v-if="add_supplier" :edit="editing"></app-create>
            <div class="row" v-if="!add_supplier">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Suppliers</h4>
                            <button class="btn btn-primary" @click="add_supplier=true">Add Supplier</button>
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
                                <tr v-for="supplier in tableData">
                                    <td>{{supplier.id}}</td>
                                    <td>{{supplier.name}}</td>
                                    <td>{{supplier.phone}}</td>
                                    <td>{{supplier.email}}</td>
                                    <td>{{supplier.address}}</td>
                                    <td>
                                        <button class="btn btn-success btn-sm" @click="editMode(supplier)"><i class="fa fa-edit"></i></button>
                                        <button class="btn btn-danger btn-sm" @click="deleteSupplier(supplier.id)"><i class="fa fa-trash"></i></button>
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
                add_supplier:false,
                editing:false
            }
        },
        created() {
            this.listen();
            this.getSuppliers();
        },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getSuppliers(){
                axios.get('suppliers')
                    .then(res => this.tableData = res.data)
                    .catch(error => Exception.handle(error))
            },

            deleteSupplier(id){
                axios.delete(`suppliers/${id}`)
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
                eventBus.$on('listSuppliers',(supplier) =>{
                    this.tableData.unshift(supplier);
                    this.add_supplier =false;
                    this.initDatatable();
                });
                eventBus.$on('cancelSupp',()=>{
                    this.add_supplier = false;
                    this.editing = false;
                });
                eventBus.$on('updateSuppliers',(supplier)=>{
                    this.add_supplier = false;
                    this.editing = false;
                    for (let i=0;i<this.tableData.length;i++){
                        if (this.tableData[i].id == supplier.id){
                            this.tableData.splice(i,1);
                        }
                    }
                    this.tableData.unshift(supplier);
                    this.initDatatable();
                });
                eventBus.$on('removeSuppliers',(ids) =>{
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
                this.$store.dispatch('updateSupplier',supplier)
                    .then(() =>{
                        this.editing=true;
                        this.add_supplier=true;
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
