<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Choose Period</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="pettyCashReport">
                            <div class="form-group">
                                <label for="d_from">From</label>
                                <input type="text" v-model="d_from" name="from" placeholder="Select Date" class="form-control from" id="d_from" required>
                            </div>
                            <div class="form-group">
                                <label for="d_to">To</label>
                                <input type="text" v-model="d_to" class="form-control to" required id="d_to">
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Generate Report
                            </button>
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
                d_from:'',
                d_to:'',
            }
        },
        mounted(){
            this.iDatePicker();
        },
        methods:{
            pettyCashReport(){
                let date = {from:this.from,to:this.to};
                axios.post('petty-cash-report',date)
                    .then(response => {
                        this.$store.dispatch('pettyCash',{
                           petty_cash:response.data,
                        });
                        this.$router.push('/petty-cash-reports');
                    })
                   .catch(error => error.response)
            },
            iDatePicker(){
                var self = this;
                $('#d_from').datepicker({
                    onSelect(selectedDate,datePicker) {
                        self.d_from = selectedDate;
                    }
                });
                $('#d_to').datepicker({
                    onSelect(selectedDate, datePicker) {
                        self.d_to = selectedDate;
                    }
                });
            }
        },
    }
</script>
<style scoped>

</style>
