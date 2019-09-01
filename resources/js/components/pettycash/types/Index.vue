<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                       <button class="btn btn-primary" @click="add_type = true" v-if="!add_type">Add Pettycash Type</button>
                    </div>
                    <div class="card-body">
                        <add-new v-if="add_type" :edit="editing"></add-new>
                        <div v-if="!add_type">
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
                    .catch(error => console.log(error.response))
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
                });
                eventBus.$on('listType',(type) =>{
                   this.add_type = false;
                   this.editing = false;
                   this.tableData.unshift(type);
                });
                eventBus.$on('cancelType',() =>{
                    this.add_type = false;
                    this.editing = false;
                })
            },
            editMode(type){
               this.$store.dispatch('pettyCashType',type)
                   .then(() => {
                       for (let i=0;i<this.tableData.length;i++){
                           if (this.tableData[i].id == type.id){
                              this.tableData.splice(i,1);
                           }
                       }
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
