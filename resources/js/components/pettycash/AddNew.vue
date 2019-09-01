<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{edit_mode ? 'Update Pettycash': 'New Pettycash'}}</h4>
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
                            <button type="submit" class="btn btn-outline-danger" @click="cancel">Cancel</button>

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
                    name:'',
                    petty_cash_id:'',
                    amount:''
                },
                edit_mode:this.edit,
                editId:null,
                types:[]
            }
        },
        created(){
            console.log()
            this.listen();
            this.getTypes();
        },
        methods:{
            getTypes(){
                axios.get('petty-cash-types')
                    .then(res => this.types = res.data)
                    .catch(error => console.log(error.response))
            },
            savePettyCash(){
                this.edit_mode ? this.update() : this.save();

            },
            save(){
                axios.post('petty-cash',this.form)
                    .then(res => eventBus.$emit('addPettyCash',res.data))
                    .catch(res => console.log(error.response))
            },
            update(){
                let petty={name: this.form.name,petty_cash_id: this.form.petty_cash_id,amount: this.form.amount,id:this.editId};
                axios.patch(`petty-cash/${this.editId}`,petty)
                    .then(res => eventBus.$emit('updatePettyCash',res.data))
                    .catch(res => console.log(error.response))
            },
            listen(){
                if (this.edit_mode){
                    this.form.name = this.$store.state.petty_cash.name,
                    this.form.petty_cash_id = this.$store.state.petty_cash.petty_cash_id,
                    this.form.amount = this.$store.state.petty_cash.amount,
                    this.editId = this.$store.state.petty_cash.id
                }

            },
            cancel(){
                eventBus.$emit('cancelPettyCash');
            }
            }
    }
</script>

<style scoped>

</style>
