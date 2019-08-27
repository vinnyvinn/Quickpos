import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
            cart:{
            items:[]
        },
        cartItems:0,
        balance:0,
        amountPaid:0,
        sales:[],
        petty_cash:[],
        pos:[],
        path_to:'/'
    },
    getters:{
        getCartItem:(state) => (product) =>{
            for (let i=0;i<state.cart.items.length;i++){
                if (state.cart.items[i].product.id == product.id){
                    return  state.cart.items[i];
                }
            }
            return null;
        },
       cartTotal(state){
       let total =0;
       state.cart.items.forEach(item => {
           total += item.product.price * item.quantity;
       })
       return total;
        },
        cartItems(state){
           return  state.cartItems =state.cart.items.length;
        },
        totalQuantity(state){
            let total=0;
            state.cart.items.forEach(item => {
                total += item.quantity;
            });
            return total;
        },
        orderedItems(state){
            return state.cart.items;
        },
    },
   mutations:{
       addProductToCart:(state,payload) => {
           state.cart.items.push({
            product:payload.product,
             quantity:payload.quantity
           });
        },
       increaseQuantity(state,payload){
       for (let i=0;state.cart.items.length;i++){
            if (state.cart.items[i].product.id ===payload.product.id){
               state.cart.items[i].quantity += payload.quantity;
               return;
           }
       }
      },
      balanceAmount(state,amount){
           state.balance = amount;
      },
       paid(state,amount){
        state.amountPaid = amount;
       },
       emptyCart(state){
          state.cart.items = [];
       },
       salesReport(state,sales){
           state.sales = sales;
       },
       pettyCash(state,data){
          state.petty_cash = data;
       },
       po(state,data){
           state.pos = data;
       },
       pathTo(state,to){
       state.path_to = to;
       }
   },
   actions:{
    addProductToCart({commit,getters},payload){
        let cartItem =getters.getCartItem(payload.product);
             if (cartItem == null){
                commit('addProductToCart',payload)
            }else {
             commit('increaseQuantity',payload);
            }
   },
       updateCart({commit,getters},payload){
            for (let i=0;i<getters.orderedItems.length;i++){
               if (getters.orderedItems[i].product.id == payload.product.id){
               getters.orderedItems[i].quantity += payload.quantity;
               if (getters.orderedItems[i].quantity ===0){
                   getters.orderedItems.splice(i,1)
               }
            return;
           }
       }
       },
       amountPaid({commit,getters},amount){
        let balance = amount - getters.cartTotal;
          commit('balanceAmount',balance);
          commit('paid',amount);
       },
       clearCart({commit}){
        commit('emptyCart');
       },
       totalSales({commit},data){

        commit('salesReport',data.sales);
       },
       pettyCash({commit},data){
        commit('pettyCash',data.petty_cash)
       },
       poReports({commit},data){
        commit('po',data.po)
       },
       pathTo({commit},to){
         commit('pathTo',to);
       }
   }
})
