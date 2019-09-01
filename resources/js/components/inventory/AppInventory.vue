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
                      <table class="table table-striped walla">
                          <thead>
                          <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="item in tableData">
                              <td>{{item.id}}</td>
                              <td>{{item.name}}</td>
                              <td>{{item.price}}</td>
                              <td>{{item.quantity}}</td>
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
            return {
                tableData: [],
               }
        },
        created(){
          this.getInventory();
        },
        mounted(){
          this.initDatable();
        },
        methods:{
            getInventory(){
                axios.get('inventory')
                    .then(res => this.tableData = res.data)
                    .catch(error => Exception.handle(error))
            },
            receiveSt(){
             this.$router.push('/receive-stock')
            },
            initDatable(){
                setTimeout(()=>{
                    $('.walla').DataTable();
                },300)
            }
        }
    }
</script>

<style scoped>

</style>
