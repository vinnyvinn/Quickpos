<template>
    <div class="sidebar" data-color="white" data-active-color="danger">
        <!--
          Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
      -->
        <div class="logo">
            <a href="#" class="simple-text logo-mini">
                <div class="logo-image-small">
                    <!--<img src="{{asset('assets/images/logo-small.png')}}">-->
                </div>
            </a>
            <a href="#" class="simple-text logo-normal">
                Vinnyvinny
                <!-- <div class="logo-image-big">
                  <img src="../assets/img/logo-big.png">
                </div> -->
            </a>
        </div>
        <div class="sidebar-wrapper">
            <ul class="nav">
                <li class="active ">
                   <router-link to="/dashboard">
                       <a>
                           <i class="nc-icon nc-bank"></i>
                           <p>Dashboard</p>
                       </a>
                   </router-link>
                </li>
                <li class="active ">
                    <router-link to="/categories">
                        <a>
                            <i class="nc-icon nc-bank"></i>
                            <p>Categories</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/products">
                        <a>
                            <i class="nc-icon nc-diamond"></i>
                            <p>Products</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/inventory">
                        <a>
                            <i class="nc-icon nc-diamond"></i>
                            <p>Inventory</p>
                        </a>
                    </router-link>
                </li>
                <li>
                 <router-link to="/sale">
                        <a>
                            <i class="nc-icon nc-diamond"></i>
                            <p>Sale</p>
                        </a>
                    </router-link>
                </li>

            </ul>
        </div>

    </div>

</template>

<script>
    import Products from "../Products";
    import Categories from "../Categories";
    import Dashboard from "./Dashboard";

    export default {
        data(){
          return {
              selectedComp:'app-dashboard'
          }
        },
        components:{
            'app-products':Products,
            'app-categories':Categories,
            'app-dashboard':Dashboard
        }
    }
</script>

<style scoped>

</style>
