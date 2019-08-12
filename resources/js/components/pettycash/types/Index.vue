<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                       <button class="btn btn-primary" @click="addPettyCash">Add Pettycash Type</button>
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
                                    <router-link :to="{name:'type-edit',params:{id:type.id}}">
                                        <button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button>
                                    </router-link>

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
    export default {
        data() {
            return {
                tableData:[],
            }
        },
        created() {
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
        }
    }
</script>
<style scoped>

</style>
