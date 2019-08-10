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
        data() {
            return {
                columns: ['id', 'name'],
                tableData: [],
                options: {
                    headings: {
                        id: 'ID',
                        name: 'Category Name',

                    },
                    sortable: ['name', 'name'],
                    filterable: ['name', 'name']
                }
            }
        },
        created() {

           this.getCategories();
        },
        methods:{
            getCategories(){
                axios.get('http://localhost:8000/api/categories')
                    .then(res => this.tableData = res.data)
                    .catch(error => console.log(error.response))
            },
            addCategory(){
                this.$router.push('/add-category');
            }
        }

    }
</script>

<style scoped>

</style>
