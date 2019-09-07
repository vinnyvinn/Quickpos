<template>
    <div class="sidebar" data-color="white" data-active-color="danger">
        <div class="logo">
            <a href="#" class="simple-text logo-mini">
                <div class="logo-image-small">
                    <img :src="'assets/images/'+logo">
                </div>
            </a>
            <a href="#" class="simple-text logo-normal">
              Vinnysoft Solutions
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
                <li>
                    <router-link to="/products">
                        <a>
                            <i class="nc-icon nc-layout-11"></i>
                            <p>Products</p>
                        </a>
                    </router-link>
                </li>

                <li>
                    <router-link to="/suppliers">
                        <a>
                            <i class="nc-icon nc-layout-11"></i>
                            <p>Suppliers</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/customers">
                        <a>
                            <i class="nc-icon nc-layout-11"></i>
                            <p>Customers</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/inventory">
                        <a>
                            <i class="nc-icon nc-chart-bar-32"></i>
                            <p>Inventory</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/pos">
                        <a>
                            <i class="nc-icon nc-air-baloon"></i>
                            <p>Purchase Order</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/petty-cash">
                        <a>
                            <i class="nc-icon nc-credit-card"></i>
                            <p>Petty Cash</p>
                        </a>
                    </router-link>
                </li>
                <li>
                 <router-link to="/sale">
                        <a>
                            <i class="nc-icon nc-basket"></i>
                            <p>Order</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reports">
                        <a>
                            <i class="nc-icon nc-chart-pie-36"></i>
                            <p>Reports</p>
                        </a>
                    </router-link>
                </li>

            </ul>
        </div>

    </div>

</template>

<script>
    import Products from "../products/Products";
    import Categories from "../categories/Categories";
    import Dashboard from "./Dashboard";

    export default {
        data(){
          return {
              selectedComp:'app-dashboard',
              logo:'logo-small.png'
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
