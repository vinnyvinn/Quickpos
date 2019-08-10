<template>
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Fruits</h4>

                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3" v-for="dish in dishes">
                                <strong>{{dish.name}}</strong>
                                <p class="item_pic"> <img :src="'/assets/images/'+item" alt=""></p>
                                <button class="btn btn-info order">Order Now</button>

                            </div>
                        </div>
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
                dishes:[],
                item:'item.png'
            }
        },
        created(){
            this.getDishes();
        },
        methods:{
            getDishes(){
                axios.get('http://localhost:8000/api/fruits')
                    .then(res => this.dishes = res.data)
                    .catch(error => error.response)
            }
        }
    }
</script>

<style scoped>

</style>
