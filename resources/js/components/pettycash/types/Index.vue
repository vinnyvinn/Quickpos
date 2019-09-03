<template>
    <div>
    <add-new v-if="add_type" :edit="editing"></add-new>
    <div class="content" v-if="!add_type">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                       <button class="btn btn-primary" @click="add_type = true">Add Pettycash Type</button>
                    </div>
                    <div class="card-body">
                              <table class="table table-striped walla">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="type in tableData">
                                    <td>{{type.id}}</td>
                                    <td>{{type.name}}</td>
                                    <td>
                                     <button class="btn btn-success btn-sm" @click="editMode(type)"><i class="fa fa-edit"></i></button>
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
                tableData:[],
                add_type:false,
                editing:false
            }
        },
        created() {
            this.listen();
            this.getPettyCashType();
        },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getPettyCashType(){
                axios.get('petty-cash-types')
                    .then(res => this.tableData = res.data)
                    .catch(error => Exception.handle(error))
            },
            addPettyCash(){
               this.$router.push('/add-type');
            },

            initDatatable(){
                setTimeout(()=>{
                    $('.walla').DataTable();
                },300)
            },
            listen(){
                eventBus.$on('addType',(type)=>{
                    this.add_type = false;
                    this.tableData.unshift(type);
                    this.initDatatable();
                });
                eventBus.$on('listType',(type) =>{
                   this.add_type = false;
                   this.editing = false;
                    for (let i=0;i<this.tableData.length;i++){
                        if (this.tableData[i].id == type.id){
                           this.tableData.splice(i,1);
                        }
                    }
                   this.tableData.unshift(type);
                    this.initDatatable();
                });
                eventBus.$on('cancelType',() =>{
                    this.add_type = false;
                    this.editing = false;
                    this.initDatatable();
                })
            },
            editMode(type){
               this.$store.dispatch('pettyCashType',type)
                   .then(() => {

                       this.add_type = true;
                       this.editing = true;
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
