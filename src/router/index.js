import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      leftBar: {
        title: 'Inicio',
        icon: 'home',
      },
    },
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('@/views/Components.vue'),
    meta: {
      leftBar: {
        title: 'Componentes',
        icon: 'dashboard',
      },
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
