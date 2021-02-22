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
        path: 'main',
        component: () => import('../components/main.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router