<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Category</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="saveCategory">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                                <button type="submit" class="btn btn-primary">Save</button>
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
        data(){
            return{
               form:{
                   name:''
               }
            }
        },
      methods:{
          saveCategory(){
              axios.post('http://localhost:8000/api/categories',this.form)
                  .then(res => this.$router.push('/categories'))
                  .catch(error => error.response)
          }
      }
    }
</script>

<style scoped>

</style>
