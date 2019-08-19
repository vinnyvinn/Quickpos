<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Purchase Order Report</h4>
                        <download-excel
                            class="btn btn-primary"
                            :data="pos">
                            <i class="fa fa-file-excel-o" aria-hidden="true"></i> Download
                        </download-excel>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Created</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="po in pos">
                                <td>{{po.id}}</td>
                                <td>{{po.name}}</td>
                                <td>{{po.description}}</td>
                                <td>{{po.price | currency}}</td>
                                <td>{{po.created}}</td>
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
        mounted(){
            this.initDatatable();
        },
        computed:{
            pos(){
                return this.$store.state.pos;
            }
        },
        methods:{
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
