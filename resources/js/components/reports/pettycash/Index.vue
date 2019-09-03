<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Petty Cash Report</h4>
                        <download-excel
                            class="btn btn-primary"
                            :data="pettyCash">
                            <i class="fa fa-file-excel-o" aria-hidden="true"></i> Download
                        </download-excel>
                        <button class="btn btn-outline-danger" @click="back">Back</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped walla">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Petty Cash</th>
                                <th>Type</th>
                                <th>Cost</th>
                                <th>Created</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="petty in pettyCash">
                                <td>{{petty.id}}</td>
                                <td>{{petty.pettycash}}</td>
                                <td>{{petty.type}}</td>
                                <td>{{petty.cost | currency}}</td>
                                <td>{{petty.created}}</td>
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
            this.listen();
            this.initDatatable();
        },
        computed: {
            pettyCash() {
                return this.$store.state.petty_cash;
            }
        },
        methods: {
            initDatatable() {
                setTimeout(() => {
                    $('.walla').DataTable();
                }, 300)
            },
            listen() {
                eventBus.$on('pettyCashReports', () => {

                })
            },
            back() {
                eventBus.$emit('backToPetty');
            }
        }
    }
</script>

<style scoped>

</style>
