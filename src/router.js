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
Vue.use(VueRouter);
const routes = [
  {
    component: Main,
    path: '/'
  },
  {
    component: Scar,
    path: '/scar'
  },
  {
    component: ShopCart,
    path: '/shopcart'
  },
  {
    component: Order,
    path: '/order'
  },
  {
    component: Pay,
    path: '/pay'
  },
  {
    component: Qr,
    path: '/qr'
  },
  {
    component: Paydone,
    path: '/paydone'
  },
  {
    component: SuccessPay,
    path: '/successpay'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
