import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path:'/cart',
        name:'Cart',
        component:()=>import('../views/Cart'),
        meta:{
          isLogin:true
        }
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
