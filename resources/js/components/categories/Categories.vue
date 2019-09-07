<template>
    <div>
    <add-category v-if="add_category" :edit="editing"></add-category>
    <div class="content" v-if="!add_category">
        <div class="row">
            <div class="col-sm-12">
         <div class="card">
     <div class="card-header">
         <h4 class="card-title">Categories</h4>
         <button class="btn btn-primary" @click="add_category = true">Add Category</button>
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
                         <button class="btn btn-info btn-sm" @click="editMode(category)"><i class="fa fa-edit" aria-hidden="true"></i></button>
                         <button class="btn btn-danger btn-sm" @click="deleteCategory(category.id)" v-if="category.id !=1"><i class="fa fa-trash"></i></button>
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
                    .catch(error => Exception.handle(error))
            },
            deleteCategory(id){
              axios.delete(`categories/${id}`)
                  .then(res => {
                      for (let i=0;i<this.tableData.length;i++){
                          if (this.tableData[i].id == res.data.category.id){
                              this.tableData.splice(i,1);
                       }
                      }
                      if (res.data.products.length){
                       eventBus.$emit('removeProducts',res.data.products);
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
                   this.initDatatable();
                  });
                eventBus.$on('allCategories',()=>{
                this.add_category = false;
                this.editing = false;
                this.initDatatable();
                 });
               eventBus.$on('updateCategory',(category)=>{
                   this.add_category = false;
                   this.editing = false;
                   for (let i=0;i<this.tableData.length;i++){
                       if (this.tableData[i].id == category.id){
                        this.tableData.splice(i,1);
                       }
                   }
                   this.tableData.unshift(category);
                   this.initDatatable();
               });
            },
                editMode(category){
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
