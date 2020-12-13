import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('../views/Start.vue'),
  },
  {
    path: '/choose',
    name: 'Choose',
    component: () => import('../views/Choose.vue'),
  },
  {
    path: '/battle',
    name: 'Battle',
    component: () => import('../views/Battle.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
