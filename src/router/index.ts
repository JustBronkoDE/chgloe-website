import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: () => import(/* webpackChunkName: "about-me" */ '../views/About.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue'),
  },
  {
    path: '/legal-notice',
    name: 'legal-notice',
    component: () => import(/* webpackChunkName: "legal-notice" */ '../views/LegalNotice.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/PrivacyPolicy.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
