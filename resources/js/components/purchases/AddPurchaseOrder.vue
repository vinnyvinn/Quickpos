<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{edit_po ? 'Update PurchaseOrder' : 'New PurchaseOrder'}}</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="savePurchaseOrder">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea name="description" id="description" v-model="form.description" cols="30" rows="10" class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" v-model="form.price" class="form-control" id="price" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Save</button>
                            <button type="submit" class="btn btn-outline-danger" @click="cancel">Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['edit'],
     data(){
         return {
             form:{
                 name:'',
                 description:'',
                 price:''
             },
             edit_po:this.edit
         }
     },
        created(){
         this.listen();
        },
        methods:{
               savePurchaseOrder(){
                   this.edit_po ? this.update() : this.save();
                },
            update(){
                   let po =  {name:this.form.name,description:this.form.description,price:this.form.price,id:this.editId};
                axios.patch(`purchases/${this.editId}`,po)
                    .then(res =>{
                        this.edit_po = false;
                        eventBus.$emit('editPo',res.data)
                    })
                    .catch(error => error.response)
            },
            save(){
                axios.post('purchases',this.form)
                    .then(res => eventBus.$emit('addPo',res.data))
                    .catch(error => error.response)
            },
            listen(){
                if (this.edit_po){
                    this.form.name = this.$store.state.edit_po.name,
                    this.form.description = this.$store.state.edit_po.description,
                    this.form.price = this.$store.state.edit_po.price,
                    this.editId = this.$store.state.edit_po.id
                }
            },
            cancel(){
                   eventBus.$emit('cancelPo');
            }
        }
    }
</script>

<style scoped>

</style>
