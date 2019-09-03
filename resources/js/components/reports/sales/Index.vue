<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Sales Report</h4>
                        <download-excel
                            class="btn btn-primary"
                            :data="sales">
                            <i class="fa fa-file-excel-o" aria-hidden="true"></i> Download
                        </download-excel>
                        <button class="btn btn-outline-danger" @click="back">Back</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Created</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="sale in sales">
                                <td>{{sale.id}}</td>
                                <td>{{sale.product}}</td>
                                <td>{{sale.category}}</td>
                                <td>{{sale.price | currency}}</td>
                                <td>{{sale.quantity}}</td>
                                <td>{{sale.total | currency}}</td>
                                <td>{{sale.created}}</td>
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
        mounted() {
            this.initDatatable();
        },
        created() {
            this.listen();
        },
        computed: {
            sales() {
             return this.$store.state.sales;
            }
        },
        methods: {
            initDatatable() {
                setTimeout(() => {
                    $('.walla').DataTable();
                }, 300)
            },
            listen() {
                eventBus.$on('salesReports', () => {
                })
            },
            back() {
                eventBus.$emit('backToSales');
            }
        }
    }
</script>

<style scoped>

</style>
