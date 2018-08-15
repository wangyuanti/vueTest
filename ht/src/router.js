import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index';
import User from './components/user';
import Order from './components/order';
import Goods from './components/goods';
import Sort from './components/sort';
import Login from './components/login';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {requiresAuth: true}
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {requiresAuth: true}
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {requiresAuth: true}
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
      meta: {requiresAuth: true}
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
