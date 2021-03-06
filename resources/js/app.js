/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
import store from "./store/store";
window.Vue = require('vue');
import Vuex from 'vuex';
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)
import VueToastr from 'vue-toastr';
 Vue.use(VueToastr);

Vue.use(Vuex);
axios.defaults.baseURL ='http://localhost:8000/api/'
import router from "./routes/router";

import User from './Helpers/User';
window.User = User;

import Exception from "./Helpers/Exception";
window.Exception = Exception;

router.beforeEach((to, from, next) => {
   store.dispatch('pathTo',to.path);
   next();
});

window.eventBus = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
//import '..'
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-sidebar', require('./components/layout/AppSidebar').default);
Vue.component('dashboard', require('./components/layout/Dashboard').default);
Vue.component('app-home', require('./components/layout/AppHome').default);
Vue.component('app-header', require('./components/layout/AppHeader').default);



Vue.filter('currency', function(value) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});
import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';
const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        '/assets/css/bootstrap.min.css',
        '/assets/css/kidlat.css',
        '/assets/css/print.scss'
    ]
};
Vue.use(VueHtmlToPaper, options);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store:store,


});
