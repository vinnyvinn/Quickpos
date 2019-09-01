<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{edit_type ? 'Update Pettycash Type' : 'New Pettycash Type'}}</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="savePettyCashType">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
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
            return{
                form:{
                    name:''
                     },
                editId:null,
                edit_type:this.edit
            }
        },
        created(){
          this.listen();
        },
        methods:{
            savePettyCashType(){
                this.edit_type ? this.update() : this.save();

            },
            save(){
                axios.post('petty-cash-types',this.form)
                    .then(res => eventBus.$emit('addType',res.data))
                    .catch(error => error.response)
            },
            update(){
                axios.patch(`petty-cash-types/${this.editId}`,{id:this.editId,name:this.form.name})
                    .then(res => {
                       this.edit_type = false;
                       eventBus.$emit('listType',res.data)
                    })
                    .catch(error => error.response)
            },
            listen(){
                  if (this.edit_type){
                      this.form.name = this.$store.state.petty_cash_type.name;
                      this.editId = this.$store.state.petty_cash_type.id;
                  }
               },
            cancel(){
                eventBus.$emit('cancelType');
            }

        }
    }
</script>

<style scoped>

</style>
