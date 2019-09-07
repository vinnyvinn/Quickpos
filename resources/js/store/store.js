import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cart: {
            items: []
        },
        cartItems: 0,
        balance: 0,
        amountPaid: 0,
        sales: [],
        petty_cash: [],
        pos: [],
        path_to: '/',
        category:{},
        product:{},
        petty_cash_type:{},
        edit_petty_cash:{},
        edit_po:{},
        supplier:{},
        customer:{}

    },
    getters: {
        getCartItem: (state) => (product) => {
            for (let i = 0; i < state.cart.items.length; i++) {
                if (state.cart.items[i].product.id == product.id) {
                    return state.cart.items[i];
                }
            }
            return null;
        },

        cartTotal(state) {
            let total = 0;
            state.cart.items.forEach(item => {
                total += item.product.price * item.quantity;
            })
            return total;
        },
        cartItems(state) {
            return state.cartItems = state.cart.items.length;
        },
        totalQuantity(state) {
            let total = 0;
            state.cart.items.forEach(item => {
                total += item.quantity;
            });
            return total;
        },
        orderedItems(state) {
            return state.cart.items;
        },

    },
    mutations: {
        addProductToCart: (state, payload) => {
            state.cart.items.push({
                product: payload.product,
                quantity: payload.quantity,
                available_qty: payload.available_qty--
            });
        },
        increaseQuantity(state, payload) {
            for (let i = 0; state.cart.items.length; i++) {
                if (state.cart.items[i].product.id === payload.product.id) {
                    state.cart.items[i].quantity += payload.quantity;
                    state.cart.items[i].available_qty -= payload.quantity;
                    return;
                }
            }
        },
        balanceAmount(state, amount) {
            state.balance = amount;
        },
        paid(state, amount) {
            state.amountPaid = amount;
        },
        emptyCart(state) {
            state.cart.items = [];
        },
        salesReport(state, sales) {
            state.sales = sales;
        },
        pettyCash(state, data) {
            state.petty_cash = data;
        },
        po(state, data) {
            state.pos = data;
        },
        pathTo(state, to) {
            state.path_to = to;
        },
        updateCategory(state,data){
        state.category = data;
        },
        updateProduct(state,data){
            state.product = data;
        },
            updatePo(state,data){
            state.edit_po = data;
        },
        updateSupplier(state,data){
            state.supplier = data;
        },
        pettyCashType(state,data){
            state.petty_cash_type = data;
        },
        pettyCashUpdate(state,data){
            state.petty_cash = data;
        },
        updateCustomer(state,data){
           state.customer = data;
        }
    },
    actions: {
        addProductToCart({commit, getters}, payload) {

            let cartItem = getters.getCartItem(payload.product);
            if (cartItem == null) {
                if (payload.available_qty <= 1) {
                    return eventBus.$emit('notify');
                }
                commit('addProductToCart', payload)
            } else {
                if (cartItem.available_qty <= 1) {
                   return eventBus.$emit('notify');
                }
                commit('increaseQuantity', payload);
            }
        },
        updateCart({commit, getters}, payload) {
            for (let i = 0; i < getters.orderedItems.length; i++) {
                if (getters.orderedItems[i].product.id == payload.product.id) {
                    if (getters.orderedItems[i].available_qty <= 1) {
                        return eventBus.$emit('notify');
                    }
                    getters.orderedItems[i].quantity += payload.quantity;
                    getters.orderedItems[i].available_qty -= payload.quantity;
                    return;
                }
            }
        },
        updateCartDec({commit, getters}, payload) {
            for (let i = 0; i < getters.orderedItems.length; i++) {
                if (getters.orderedItems[i].product.id == payload.product.id) {
                    getters.orderedItems[i].quantity += payload.quantity;
                    getters.orderedItems[i].available_qty -= payload.quantity;
                    if (getters.orderedItems[i].quantity === 0) {
                        getters.orderedItems.splice(i, 1)
                    }
                    return;
                }
            }
        },
        amountPaid({commit, getters}, amount) {
            let balance = amount - getters.cartTotal;
            commit('balanceAmount', balance);
            commit('paid', amount);
        },
        clearCart({commit}) {
            commit('emptyCart');
        },
        totalSales({commit}, data) {
            commit('salesReport', data.sales);
        },
        pettyCash({commit}, data) {
            commit('pettyCash', data.petty_cash)
        },
        poReports({commit}, data) {
            commit('po', data.po)
        },
        pathTo({commit}, to) {
            commit('pathTo', to);
        },
        updateCategory({commit},data){
            commit('updateCategory',data);
        },
        updateProduct({commit},data){
            commit('updateProduct',data);
        },
           updatePo({commit},data){
            commit('updatePo',data);
        },
        pettyCashType({commit},data){
            commit('pettyCashType',data);
        },
        pettyCashUpdate({commit},data){
            commit('pettyCashUpdate',data);
        },
        updateSupplier({commit},data){
            commit('updateSupplier',data);
        },
        updateCustomer({commit},data){
            commit('updateCustomer',data);
        }

    },
})
