<template>
    <div class="content">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center login">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                                    <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="form.email" required autocomplete="email" autofocus>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="form.password" required autocomplete="current-password">
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>

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
            return {
                form:{
                    email:'',
                    password:''
                }
            }
        },
        created(){
            if (User.loggedIn()){
                this.$router.push('/sale');
            }
        },
        methods:{
            login(){
            User.login(this.form);
            },
            goRegister(){
                console.log('here now')
                //this.$router.push('/signup')
            }
        }
    }
</script>

<style scoped>
.wrapper{
    background: linear-gradient(to right, #0062E6, #33AEFF) !important;
}
   [data-v-15924bb4]{
        background: red !important;
    }
    [data-v-15924bb4]{
        background: red !important;
    }
    .login{
        font-weight: 900;
    }
    .reg{
        margin-top: -65px;
        margin-right: 45px;

    }
</style>
