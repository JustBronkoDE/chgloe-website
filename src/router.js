import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';

Vue.use(Router);
Vue.use(Meta, {
  keyName: 'meta',
});

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue'),
    },
    {
      path: '/impress',
      name: 'impress',
      component: () => import(/* webpackChunkName: "impress" */ './views/Impress.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue'),
    },
  ],
});

export default router;
