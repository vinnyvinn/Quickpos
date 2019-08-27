<template>
       <div>
           <my-sidebar v-if="nextPath"></my-sidebar>
           <div class="main-panel">
           <my-header v-if="nextPath"></my-header>
           <router-view></router-view>
           </div>
       </div>
</template>

<script>
    import AppHeader from "./AppHeader";
    import AppFooter from "./AppFooter";
    import AppSidebar from "./AppSidebar";
    export default {
        computed:{
          nextPath(){
              return !(this.$store.state.path_to =='/login' || this.$store.state.path_to=='/signup');
          }
        },
        components:{
            'my-header':AppHeader,
            'my-footer':AppFooter,
            'my-sidebar':AppSidebar
        }
    }
</script>

<style scoped>

</style>
