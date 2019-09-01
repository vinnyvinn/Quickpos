<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">

                    <div class="card-header">
                       <button class="btn btn-primary" @click="add_petty_cash = true" v-if="!add_petty_cash">Add Pettycash</button>
                         </div>
                    <div class="card-body">
                        <add-new v-if="add_petty_cash" :edit="editing"></add-new>
                        <div v-if="!add_petty_cash">
                            <table class="table table-striped walla">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="cash in tableData">
                                    <td>{{cash.id}}</td>
                                    <td>{{cash.name}}</td>
                                    <td>{{cash.type}}</td>
                                    <td>{{cash.amount | currency}}</td>
                                    <td>
                                     <button class="btn btn-success btn-sm" @click="editMode(cash)"><i class="fa fa-edit"></i></button>
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
    import AddNew from "./AddNew";

    export default {
        data() {
            return {
                tableData: [],
                add_petty_cash:false,
                editing:false
            }
        },
        created() {
            this.listen();
            this.getPettyCash();
        },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getPettyCash(){
                axios.get('petty-cash')
                    .then(res => this.tableData = res.data)
                    .catch(error => Exception.handle(error))
            },

            initDatatable(){
                setTimeout(()=>{
                    $('.walla').DataTable();
                },300)
            },
            listen(){
                eventBus.$on('addPettyCash',(petty) =>{
                    this.add_petty_cash = false;
                    this.tableData.unshift(petty);
                });
                eventBus.$on('updatePettyCash',(petty) =>{
                    this.add_petty_cash = false;
                    this.editing = false;
                    this.tableData.unshift(petty);
                });
                eventBus.$on('cancelPettyCash',() =>{
                    this.add_petty_cash = false;
                    this.editing = false;
                })
            },
            editMode(cash){
             this.$store.dispatch('pettyCashUpdate',cash)
                 .then(() =>{
                     this.add_petty_cash = true;
                     this.editing = true;
                     for (let i=0;i<this.tableData.length;i++){
                         if (this.tableData[i].id == cash.id){
                             this.tableData.splice(i,1)
                         }
                     }
                 })
            }
        },
        components:{
            AddNew
        }
    }
</script>
<style scoped>

</style>
