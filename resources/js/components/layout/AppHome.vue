<template>
       <div>
           <my-sidebar></my-sidebar>
           <div class="main-panel">
           <my-header></my-header>
           <router-view></router-view>

           </div>
       </div>
</template>

<script>
    import AppHeader from "./AppHeader";
    import AppFooter from "./AppFooter";
    import AppSidebar from "./AppSidebar";

    export default {
        components:{
            'my-header':AppHeader,
            'my-footer':AppFooter,
            'my-sidebar':AppSidebar
        }
    }
</script>

<style scoped>

</style>
