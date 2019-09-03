<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{edit ? 'Update Category' : 'New Category'}}</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="saveCategory">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                                <button type="submit" class="btn btn-primary">Save</button>
                                 <button type="button" class="btn btn-outline-danger" @click="cancel">Cancel</button>
                            </div>
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
                editId:null
            }
        },
        created(){
        this.listen();
        },
      methods:{
             saveCategory(){
             this.edit ? this.update() : this.save();
          },
          save(){
              axios.post('categories',this.form)
                  .then(res => eventBus.$emit('listCategories',res.data))
                  .catch(error => error.response)
          },
          update(){
              axios.patch(`categories/${this.editId}`,{id:this.editId,name:this.form.name})
                  .then(res => eventBus.$emit('updateCategory',res.data))
                  .catch(error => error.response)
          },
          cancel(){
            eventBus.$emit('allCategories');
          },
          listen(){
            if (this.edit){
                this.form.name = this.$store.state.category.name;
                this.editId = this.$store.state.category.id
            }
          }
      }
    }
</script>

<style scoped>

</style>
