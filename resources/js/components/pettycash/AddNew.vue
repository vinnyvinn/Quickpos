<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">New Pettycash</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="savePettyCash">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="form.name" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="petty_cash_id">Pettycash Type</label>
                                <select id="petty_cash_id" class="form-control" v-model="form.petty_cash_id" required>
                                    <option v-for="type in types" :value="type.id">{{type.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="amount">Cost</label>
                                <input type="number" v-model="form.amount" class="form-control" id="amount" required>
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
                    name:'',
                    petty_cash_id:'',
                    amount:''
                },
                types:[]
            }
        },
        created(){
            this.getTypes();
        },
        methods:{
            getTypes(){
                axios.get('petty-cash-types')
                    .then(res => this.types = res.data)
                    .catch(error => console.log(error.response))
            },
            savePettyCash(){
                axios.post('petty-cash',this.form)
                    .then(res => this.$router.push('/petty-cash'))
                    .catch(res => console.log(error.response))
            }
            }
    }
</script>

<style scoped>

</style>
