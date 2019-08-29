import Vue from 'vue';
import VueRouter from 'vue-router';

import Categories from "../components/categories/Categories";
import Dashboard from "../components/layout/Dashboard";
import AddCategory from "../components/categories/AddCategory";
import AddProduct from "../components/products/AddProduct";
import AppSale from "../components/AppSale";
import AppInventory from "../components/inventory/AppInventory";
import ReceiveStock from "../components/inventory/ReceiveStock";
import ViewOrder from "../components/ViewOrder";
import AppReceipt from "../components/AppReceipt";
import Edit from "../components/products/Edit";
import PurchaseOrder from "../components/purchases/PurchaseOrder";
import AddPurchaseOrder from "../components/purchases/AddPurchaseOrder";
import EditPurchaseOrder from "../components/purchases/EditPurchaseOrder";
import AddNew from "../components/pettycash/AddNew";
import EditPettyCash from "../components/pettycash/Edit";
import Types from "../components/pettycash/types/Index";
import EditTypes from "../components/pettycash/types/Edit";
import AddTypes from "../components/pettycash/types/AddNew";
import BaseIndex from "../components/pettycash/BaseIndex";
import BaseIndexProducts from "../components/products/BaseIndex";
import Reports from "../components/reports/Index";
import salesReport from "../components/reports/sales/Index";
import pettyCashReport from "../components/reports/pettycash/Index";
import poReport from "../components/reports/po/Index";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import User from "../Helpers/User";


Vue.use(VueRouter);

function guard(to, from, next) {
    if (User.loggedIn()) {
        next();
    } else {
        next('/login');
    }
}

const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/products', component: BaseIndexProducts, beforeEnter: guard},
    {path: '/products/:id/edit', component: Edit, name: 'product-edit', beforeEnter: guard},
    {path: '/categories', component: Categories, beforeEnter: guard},
    {path: '/dashboard', component: Dashboard, beforeEnter: guard},
    {path: '/add-category', component: AddCategory, beforeEnter: guard},
    {path: '/add-product', component: AddProduct, beforeEnter: guard},
    {path: '/sale', component: AppSale, beforeEnter: guard},
    {path: '/inventory', component: AppInventory, beforeEnter: guard},
    {path: '/receive-stock', component: ReceiveStock, beforeEnter: guard},
    {path: '/order-details', component: ViewOrder, beforeEnter: guard},
    {path: '/print-receipt', component: AppReceipt, beforeEnter: guard},
    {path: '/pos', component: PurchaseOrder, beforeEnter: guard},
    {path: '/add-po', component: AddPurchaseOrder, beforeEnter: guard},
    {path: '/edit-po', component: EditPurchaseOrder, name: 'po-edit', beforeEnter: guard},
    {path: '/petty-cash', component: BaseIndex, beforeEnter: guard},
    {path: '/add-petty-cash', component: AddNew, beforeEnter: guard},
    {path: '/petty-cash-edit/:id/edit', component: EditPettyCash, name: 'petty-cash-edit', beforeEnter: guard},
    {path: '/types', component: Types, beforeEnter: guard},
    {path: '/type-edit/:id/edit', component: EditTypes, name: 'type-edit', beforeEnter: guard},
    {path: '/add-type', component: AddTypes, beforeEnter: guard},
    {path: '/reports', component: Reports, beforeEnter: guard},
    {path: '/sales-reports', component: salesReport, beforeEnter: guard},
    {path: '/petty-cash-reports', component: pettyCashReport, beforeEnter: guard},
    {path: '/po-reports', component: poReport, beforeEnter: guard},
    {path: '*', redirect: '/sale'},

];

export default new VueRouter({
    routes,
    mode: 'history'
})
