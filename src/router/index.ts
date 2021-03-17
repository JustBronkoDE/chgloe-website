import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue'),
  },
  {
    path: '/impress',
    name: 'impress',
    component: () => import(/* webpackChunkName: "impress" */ '../views/Impress.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
