<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Inventory</h4>
                        <button class="btn btn-primary" @click="receiveSt">Receive</button>
                    </div>
                    <div class="card-body">
                        <v-client-table
                            :data="tableData"
                            :columns="columns"
                            :options="options">
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                columns: ['id', 'name','price','quantity'],
                tableData: [],
                options: {
                    headings: {
                        id: 'ID',
                        name: 'Name',
                        name: 'Price',
                        name: 'Quantity',

                    },
                    sortable: ['name', 'name'],
                    filterable: ['name', 'name']
                }
            }
        },
        created(){
          this.getInventory();
        },
        methods:{
            getInventory(){
                axios.get('http://localhost:8000/api/inventory')
                    .then(res => this.tableData = res.data)
                    .catch(error => console.log(error.response))
            },
            receiveSt(){
             this.$router.push('/receive-stock')
            }
        }
    }
</script>

<style scoped>

</style>
