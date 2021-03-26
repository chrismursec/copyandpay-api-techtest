require('./bootstrap');

import Vue from 'vue'
import EventBus from './EventBus'

import App from './views/app.vue'
import Login from './views/Login.vue';
import Register from './views/Regsiter.vue';
import Payment from './views/Payment.vue';
import PaymentMade from './views/PaymentMade.vue';
import UserPayments from './views/UsersPayments.vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.prototype.$bus = EventBus

const routes = [
    {path: '/login', name: 'Login', component: Login },
    {path: '/register', name: 'Register', component: Register },
    {path: '/payment', name: 'Payment', component: Payment },
    {path: '/paymentmade', name: 'PaymentMade', component: PaymentMade },
    {path: '/mypayments', name: 'UserPayments', component: UserPayments },
]

const router = new VueRouter({
  routes
})



const app = new Vue({
    el: '#app',
    router,
    components: { App }
});
