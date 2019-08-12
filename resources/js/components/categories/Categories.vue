<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
         <div class="card">
     <div class="card-header">
         <h4 class="card-title">Categories</h4>
         <button class="btn btn-primary" @click="addCategory">Add Category</button>
     </div>
             <div class="card-body">
                 <table class="table table-striped walla">
                     <thead>
                     <tr>
                         <th>#</th>
                         <th>Name</th>
                         <th>Action</th>
                     </tr>
                     </thead>
                     <tbody>
                 <tr v-for="category in tableData">
                     <td>{{category.id}}</td>
                     <td>{{category.name}}</td>
                     <td>
                         <router-link :to="{name:'category-edit',params:{id:category.id}}">
                             <button class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button>
                         </router-link>
                         <button class="btn btn-danger btn-sm" @click="deleteCategory(category.id)"><i class="fa fa-trash"></i></button>
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
    export default {
        data() {
            return {
              tableData: [],
               }
        },
        created() {
           this.getCategories();
        },
        mounted(){
            this.initDatatable();
        },
        methods:{
            getCategories(){
                axios.get('categories')
                    .then(res => this.tableData = res.data)
                    .catch(error => console.log(error.response))
            },
            addCategory(){
                this.$router.push('/add-category');
            },
            deleteCategory(id){
              axios.post('delete-category',{id:id})
                  .then(res => this.$router.go())
                  .catch(error => error.response)
            },
            initDatatable(){
                setTimeout(()=>{
                    $('.walla').DataTable();
                },300)
            }
        }

    }
</script>

<style scoped>

</style>
