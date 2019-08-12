<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Category</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateCategory">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                                <button type="submit" class="btn btn-primary">Update</button>
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
        created(){
            this.getCategory();
        },
        methods:{
            getCategory(){
                axios.get('categories/'+this.$route.params.id)
                    .then(res => this.form.name =res.data.name)
                    .catch(error => error.response)
            },
            updateCategory(){
                axios.post('update-category',{id:this.$route.params.id,name:this.form.name})
                    .then(res => this.$router.push('/products'))
                    .catch(error => console.log(error.response))
            }
        }
    }
</script>

<style scoped>

</style>
