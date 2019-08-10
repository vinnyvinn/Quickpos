import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from "../components/Products";
import Categories from "../components/Categories";
import Dashboard from "../components/layout/Dashboard";
import AddCategory from "../components/AddCategory";
import AddProduct from "../components/AddProduct";
import AppSale from "../components/AppSale";
import AppInventory from "../components/AppInventory";
import ReceiveStock from "../components/ReceiveStock";
import ViewOrder from "../components/ViewOrder";
import AppReceipt from "../components/AppReceipt";

Vue.use(VueRouter);

const routes = [
    {path:'/products',component:Products},
    {path:'/categories',component:Categories},
    {path:'/dashboard',component:Dashboard},
    {path:'/add-category',component:AddCategory},
    {path:'/add-product',component:AddProduct},
    {path:'/sale',component:AppSale},
    {path:'/inventory',component:AppInventory},
    {path:'/receive-stock',component:ReceiveStock},
    {path:'/order-details',component:ViewOrder},
    {path:'/print-receipt',component:AppReceipt},

];

export default new VueRouter({
    routes,
    mode:'history'
})
