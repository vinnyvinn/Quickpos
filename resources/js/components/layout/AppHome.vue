<template>

           <div :class="{wrapper:nextPath,wrapperlogin:!nextPath}">
           <my-sidebar v-if="nextPath"></my-sidebar>
           <div :class="{'main-panel':nextPath,mainpanellogin:!nextPath,}">
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
        methods:{
          color(){
              let classes = {background:'green'};
              return this.nextPath ? classes :'';
          }
        },
        components:{
            'my-header':AppHeader,
            'my-footer':AppFooter,
            'my-sidebar':AppSidebar
        }
    }
</script>

<style>
    .main-panel {
        position: relative;
        float: right;
        width: calc(100% - 260px);
        background: #f4f3ef;
        -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
    .mainpanellogin {
        position: relative;
        float: right;
        margin-top: 150px;
        width: calc(100% - 260px);
        background: transparent;
        -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }
    .wrapper{
        position: relative;
        top: 0;
        height: 100vh;
    }
    .wrapperlogin{
        position: relative;
        top: 0;
        right: 0;
        height: 100vh;
        background:#007bff;
        background: linear-gradient(to right, #0062E6, #33AEFF);
    }
</style>
