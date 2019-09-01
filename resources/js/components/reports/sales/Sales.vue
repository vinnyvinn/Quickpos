<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Choose Period</h4>
                    </div>
                    <div class="card-body">
                              <form @submit.prevent="salesReport">
                             <div class="form-group">
                                 <label for="from">From</label>
                                 <input type="text" v-model="from" name="from" placeholder="Select Date" class="form-control datepicker" id="from" required>
                             </div>
                             <div class="form-group">
                                 <label for="to">To</label>
                                 <input type="text" v-model="to" class="datepicker form-control" required id="to">
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
                from:'',
                to:'',
                show:false
            }
        },
        mounted(){
         this.initDatePicker();

         },
        methods:{
            salesReport(){
                let date = {from:this.from,to:this.to};
                axios.post('sales-report',date)
                    .then(response => {
                        this.$store.dispatch('totalSales',{
                           sales:response.data,
                        });
                       this.$router.push('/sales-reports');
                    })
                  .catch(error => error.response)
            },

               initDatePicker(){
                var self = this;
                $('#from').datepicker({
                    onSelect(selectedDate, datePicker) {

                     self.from = selectedDate;
                    }
                });
                $('#to').datepicker({
                    onSelect:function(selectedDate, datePicker) {
                     self.to = selectedDate;
                    }
                });
            }
        },

    }
</script>
<style scoped>

</style>
