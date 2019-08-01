import Vue from 'vue';
import Vuex from 'vuex';
import ShowGoods from './modules/ShowGoods';
import cart from './modules/Cart';
import login from './modules/Login';
import address from './modules/Address';
// import logger from 'vuex/dist/logger';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    ShowGoods,
    cart,
    login,
    address
  }
  // Plugins: [logger()]
});
