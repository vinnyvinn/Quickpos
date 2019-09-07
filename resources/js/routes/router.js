import Vue from 'vue';
import VueRouter from 'vue-router';

import Categories from "../components/categories/Categories";
import Dashboard from "../components/layout/Dashboard";
import AppSale from "../components/AppSale";
import AppInventory from "../components/inventory/AppInventory";
import ReceiveStock from "../components/inventory/ReceiveStock";
import ViewOrder from "../components/ViewOrder";
import AppReceipt from "../components/AppReceipt";
import PurchaseOrder from "../components/purchases/PurchaseOrder";
import BaseIndexProducts from "../components/products/BaseIndex";
import Reports from "../components/reports/Index";
import salesReport from "../components/reports/sales/Index";
import poReport from "../components/reports/po/Index";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import User from "../Helpers/User";
import Suppliers from "../components/suppliers/Index";
import Customers from "../components/customers/Index";
import BaseIndex from "../components/pettycash/BaseIndex";
import Types from "../components/pettycash/types/Index";
import pettyCashReport from "../components/reports/pettycash/Index";

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
    {path: '/categories', component: Categories, beforeEnter: guard},
    {path: '/suppliers', component: Suppliers, beforeEnter: guard},
    {path: '/customers', component: Customers, beforeEnter: guard},
    {path: '/dashboard', component: Dashboard, beforeEnter: guard},
    {path: '/sale', component: AppSale, beforeEnter: guard},
    {path: '/inventory', component: AppInventory, beforeEnter: guard},
    {path: '/receive-stock', component: ReceiveStock, beforeEnter: guard},
    {path: '/order-details', component: ViewOrder, beforeEnter: guard},
    {path: '/print-receipt', component: AppReceipt, beforeEnter: guard},
    {path: '/pos', component: PurchaseOrder, beforeEnter: guard},
    {path: '/petty-cash', component: BaseIndex, beforeEnter: guard},
    {path: '/types', component: Types, beforeEnter: guard},
     {path: '/reports', component: Reports, beforeEnter: guard},
    {path: '/sales-reports', component: salesReport, beforeEnter: guard},
    {path: '/petty-cash-reports', component: pettyCashReport, beforeEnter: guard},
    {path: '/po-reports', component: poReport, beforeEnter: guard},
    {path: '*', redirect: '/sale'}
];
export default new VueRouter({
    routes,
    mode: 'history'
})
