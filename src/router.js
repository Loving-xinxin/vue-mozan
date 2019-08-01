import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main.vue';
import Scar from './components/Scar.vue';
import ShopCart from './components/ShopCart.vue';
import Order from './components/Order.vue';
import Pay from './components/Pay.vue';
import Qr from './components/Qr.vue';
import Paydone from './components/PayDone.vue';
import SuccessPay from './components/SuccessPay.vue';
import { PUBLICURL } from './publicurl';
Vue.use(VueRouter);
const routes = [
  {
    component: Main,
    path: PUBLICURL + '/'
  },
  {
    component: Scar,
    path: PUBLICURL + '/scar'
  },
  {
    component: ShopCart,
    path: PUBLICURL + '/shopcart'
  },
  {
    component: Order,
    path: PUBLICURL + '/order'
  },
  {
    component: Pay,
    path: PUBLICURL + '/pay'
  },
  {
    component: Qr,
    path: PUBLICURL + '/qr'
  },
  {
    component: Paydone,
    path: PUBLICURL + '/paydone'
  },
  {
    component: SuccessPay,
    path: PUBLICURL + '/successpay'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
