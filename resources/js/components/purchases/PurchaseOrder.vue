<template>
    <div class="content">
        <add-purchase-order v-if="add_po"></add-purchase-order>
        <div class="row" v-if="!add_po">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Purchase Orders</h4>
                        <button class="btn btn-primary" @click="add_po = true">Add PurchaseOrder</button>
                    </div>
                    <div class="card-body">
                        <add-purchase-order v-if="add_po" :edit="edit_ing"></add-purchase-order>

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
                                  <button class="btn btn-success btn-sm" @click="editP(po)"><i class="fa fa-edit"></i></button>
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
    import AddPurchaseOrder from "./AddPurchaseOrder";

    export default {
        data(){
            return{
                pos:[],
                add_po:false,
                edit_ing:false
            }
        },
       created(){
            this.listen();
            this.getPos();
       },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getPos(){
                axios.get('purchases')
                    .then(res => this.pos = res.data)
                    .catch(error => Exception.handle(error))
            },

            initDatatable(){
            setTimeout(()=>{
                $('.walla').DataTable();
            },300)
            },
            editP(po){
              this.$store.dispatch('updatePo',po)
                  .then(() =>{
                      this.edit_ing = true;
                      this.add_po = true;
                  })
            },
            listen(){
                eventBus.$on('addPo',(po)=> {
                    this.add_po = false;
                    this.pos.unshift(po);
                    this.initDatatable();
                });
                eventBus.$on('editPo',(po) =>{
                    this.add_po = false;
                    this.edit_ing = false;
                    for (let i=0;i<this.pos.length;i++){
                        if (this.pos[i].id == po.id){
                            this.pos.splice(i,1);
                        }
                    }
                    this.pos.unshift(po);
                    this.initDatatable();
                });
                eventBus.$on('cancelPo',()=>{
                    this.add_po = false;
                    this.edit_ing = false;
                    this.initDatatable();
                })
            }
        },
     components:{
            AddPurchaseOrder
     }
    }
</script>

<style scoped>

</style>
