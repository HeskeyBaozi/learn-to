import Vue from 'vue';
import Router from 'vue-router';
import Topbar from '@/components/Topbar';
import Home from '@/pages/Home';
import Main from '@/pages/Main';
import Problems from '@/pages/Problems';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'Main',
          components: {
            topbar: Topbar,
            main: Home
          }
        },
        {
          path: 'problems',
          name: 'Problems',
          components: {
            topbar: Topbar,
            main: Problems
          }
        }
      ]
    }
  ]
})
