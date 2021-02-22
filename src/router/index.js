import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home'),
    children: [
      {
        path: 'users',
        component: () => import('../components/users.vue')
      },
      {
        path: 'roles',
        component: () => import('../components/roles.vue')
      },
      {
        path: 'rights',
        component: () => import('../components/rights.vue')
      },
      {
        path: 'goods',
        component: () => import('../components/goods.vue')
      },
      {
        path: 'params',
        component: () => import('../components/params.vue')
      },
      {
        path: 'categories',
        component: () => import('../components/categories.vue')
      },
      {
        path: 'orders',
        component: () => import('../components/orders.vue')
      },
      {
        path: 'reports',
        component: () => import('../components/reports.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router