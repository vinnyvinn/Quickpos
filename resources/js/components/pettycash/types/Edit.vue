<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Pettycash Type</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updatePettyCashType">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>

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
    this.getType();
},
        methods:{
            updatePettyCashType(){
                let type = {name:this.form.name,id:this.$route.params.id}
                axios.post('update-types',type)
                    .then(res => this.$router.push('/petty-cash'))
                    .catch(error => error.response)
            },
            getType(){
                axios.get('petty-cash-types/'+this.$route.params.id)
                    .then(res => this.form.name = res.data.name)
                    .catch(error => console.log(error.response))
            }

        }
    }
</script>

<style scoped>

</style>
