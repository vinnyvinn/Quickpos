import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from "../components/products/Products";
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
import EditCategory from "../components/categories/EditCategory";
import PurchaseOrder from "../components/purchases/PurchaseOrder";
import AddPurchaseOrder from "../components/purchases/AddPurchaseOrder";
import EditPurchaseOrder from "../components/purchases/EditPurchaseOrder";
import AddNew from "../components/pettycash/AddNew";
import EditPettyCash from "../components/pettycash/Edit";
import Index from "../components/pettycash/Index";
import Types from "../components/pettycash/types/Index";
import EditTypes from "../components/pettycash/types/Edit";
import AddTypes from "../components/pettycash/types/AddNew";
import BaseIndex from "../components/pettycash/BaseIndex";
import BaseIndexProducts from "../components/products/BaseIndex";
import Reports from "../components/reports/Index";
import salesReport from "../components/reports/sales/Index";
import pettyCashReport from "../components/reports/pettycash/Index";
import poReport from "../components/reports/po/Index";



Vue.use(VueRouter);

const routes = [
    {path:'/products',component:BaseIndexProducts},
    {path:'/products/:id/edit',component:Edit,name:'product-edit'},
    {path:'/categories',component:Categories},
    {path:'/category/:id/edit',component:EditCategory,name:'category-edit'},
    {path:'/dashboard',component:Dashboard},
    {path:'/add-category',component:AddCategory},
    {path:'/add-product',component:AddProduct},
    {path:'/sale',component:AppSale},
    {path:'/inventory',component:AppInventory},
    {path:'/receive-stock',component:ReceiveStock},
    {path:'/order-details',component:ViewOrder},
    {path:'/print-receipt',component:AppReceipt},
    {path:'/pos',component:PurchaseOrder},
    {path:'/add-po',component:AddPurchaseOrder},
    {path:'/edit-po',component:EditPurchaseOrder,name:'po-edit'},
    {path:'/petty-cash',component:BaseIndex},
    {path:'/add-petty-cash',component:AddNew},
    {path:'/petty-cash-edit/:id/edit',component:EditPettyCash,name:'petty-cash-edit'},
    {path:'/types',component:Types},
    {path:'/type-edit/:id/edit',component:EditTypes,name:'type-edit'},
    {path:'/add-type',component:AddTypes},
    {path:'/reports',component:Reports},
    {path:'/sales-reports',component:salesReport},
    {path:'/petty-cash-reports',component:pettyCashReport},
    {path:'/po-reports',component:poReport},
    {path:'*',redirect:'/sale'},

];

export default new VueRouter({
    routes,
    mode:'history'
})
