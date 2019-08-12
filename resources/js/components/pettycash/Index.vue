<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">

                    <div class="card-header">
                       <router-link to="/add-petty-cash">
                           <button class="btn btn-primary">Add Pettycash</button>
                       </router-link>

                    </div>

                    <div class="card-body">
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
                                    <router-link :to="{name:'petty-cash-edit',params:{id:cash.id}}">
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
                tableData: [],
            }
        },
        created() {
            this.getPettyCash();
        },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getPettyCash(){
                axios.get('petty-cash')
                    .then(res => this.tableData = res.data)
                    .catch(error => console.log(error.response))
            },
            addPettyCash(){
                this.$router.push('/add-petty-cash');
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
