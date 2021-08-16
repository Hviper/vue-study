import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const home = ()=>import ('../views/home/home.vue')
const cart = ()=>import ('../views/cart/cart.vue')
const profile = ()=>import ('../views/profile/profile.vue')
const category = ()=>import ('../views/category/category.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home    
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart    
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile    
    },
    {
      path: '/category',
      name: 'category',
      component: category    
    },
  ],
  mode: 'history'
})
