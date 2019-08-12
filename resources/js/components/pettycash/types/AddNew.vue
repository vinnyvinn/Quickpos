<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Pettycash Type</h4>

                    </div>
                    <div class="card-body">
                        <form @submit.prevent="savePettyCashType">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                           <button type="submit" class="btn btn-primary">Save</button>

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
            savePettyCashType(){
                axios.post('petty-cash-types',this.form)
                    .then(res => this.$router.push('/petty-cash'))
                    .catch(error => error.response)
            }

        }
    }
</script>

<style scoped>

</style>
