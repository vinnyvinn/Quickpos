<template>
    <div>
        <app-index v-if="show"></app-index>
        <div class="content" v-if="!show">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Choose Period</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="poReport">
                                <div class="form-group">
                                    <label for="from_d">From</label>
                                    <input type="text" v-model="from" name="from" placeholder="Select Date"
                                           class="form-control datepicker" id="from_d" required>
                                </div>
                                <div class="form-group">
                                    <label for="to_d">To</label>
                                    <input type="text" v-model="to" class="datepicker form-control" required id="to_d">
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
    </div>
</template>
<script>
    import Index from "./Index";

    export default {
        data() {
            return {
                from: '',
                to: '',
                show: false
            }
        },
        mounted() {
            this.listen();
            this.initDatePicker();
        },
        methods: {
            poReport() {
                let date = {from: this.from, to: this.to};
                axios.post('po-report', date)
                    .then(response => {
                        this.$store.dispatch('poReports', {
                            po: response.data,
                        });
                        this.show = true;
                        eventBus.$emit('showPos');
                    })
                    .catch(error => Exception.handle(error))
            },

            initDatePicker() {
                var self = this;
                $('#from_d').datepicker({
                    onSelect(selectedDate, datePicker) {

                        self.from = selectedDate;
                    }
                });
                $('#to_d').datepicker({
                    onSelect: function (selectedDate, datePicker) {
                        self.to = selectedDate;
                    }
                });
            },
            listen() {
                eventBus.$on('backToPos', () => {
                    this.show = false;
                })
            }
        },
        components: {
            'app-index': Index
        }
    }
</script>
<style scoped>

</style>
