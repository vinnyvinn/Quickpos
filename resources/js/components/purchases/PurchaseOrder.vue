<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">

                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Purchase Orders</h4>
                        <button class="btn btn-primary" @click="addPo">Add PurchaseOrder</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="po in pos">
                                <td>{{po.id}}</td>
                                <td>{{po.name}}</td>
                                <td>{{po.price | currency}}</td>
                                <td>{{po.description}}</td>
                                <td>
                                    <router-link :to="{name:'po-edit',params:{id:po.id}}">
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
        data(){
            return{
                pos:[]
            }
        },
       created(){
            this.getPos();

       },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getPos(){
                axios.get('purchases')
                    .then(res => this.pos = res.data)
                    .catch(error => console.log(error.response))
            },
            addPo(){
                this.$router.push('/add-po');
            },
            initDatatable(){
            setTimeout(()=>{
                $('.walla').DataTable();
            },300)
            }
        },

    }
</script>

<style scoped>

</style>
