import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/problems',
      name: 'problems',
      component: () => import('./views/problem-library/ProblemList.vue')
    },
    {
      path: '/ranks',
      name: 'ranks',
      component: () => import('./views/Ranks.vue')
    }
  ]
});
