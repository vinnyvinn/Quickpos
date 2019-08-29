<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
         <div class="card">
     <div class="card-header">
         <h4 class="card-title" v-if="!add_category">Categories</h4>
         <button class="btn btn-primary" @click="addCategory" v-if="!add_category">Add Category</button>
           </div>
             <div class="card-body">
                 <add-category v-if="add_category" :edit="editing"></add-category>
             <div v-if="!add_category">
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
                         <button class="btn btn-info btn-sm" @click="editMode(category)"><i class="fa fa-edit" aria-hidden="true"></i></button>
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
    </div>
</template>
<script>
    import AddCategory from "./AddCategory";
    export default {
        data() {
            return {
                tableData: [],
                add_category:false,
                editing:false
                 }
        },
        created() {
            this.listen();
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
            deleteCategory(id){
              axios.delete(`categories/${id}`)
                  .then(res => {
                      for (let i=0;i<this.tableData.length;i++){
                          if (this.tableData[i].id == res.data){
                              this.tableData.splice(i,1);
                          }
                      }
                  })
                  .catch(error => error.response)
            },
            initDatatable(){
                setTimeout(()=>{
                  $('.walla').DataTable();
                },300)
            },
            listen(){
                eventBus.$on('listCategories',(category)=>{
                   this.add_category =false;
                   this.tableData.unshift(category);
                  });

                eventBus.$on('allCategories',()=>{
                this.add_category = false;
                 })
            },
            addCategory(){
                this.add_category = true;
                this.editing = false;
            },
            editMode(category){
               for (let i=0;i<this.tableData.length;i++){
                   if (this.tableData[i].id == category.id){
                      this.tableData.splice(i,1);
                   }
               }
               this.$store.dispatch('updateCategory',category)
                   .then(()=> {
                       this.add_category = true;
                       this.editing = true;
                   });
            },
        },
        components:{
            AddCategory
        }
    }
</script>

<style scoped>

</style>
