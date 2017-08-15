import Vue from 'vue'
import Router from 'vue-router'
import Topbar from '@/components/Topbar'
import Home from '@/pages/Home'
import Main from '@/pages/Main'
import User from '@/pages/User'
Vue.use(Router)

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
<<<<<<< HEAD
        },
        {
          path: 'problems',
          name: 'Problems',
          components: {
            topbar: Topbar,
            main: () => import('@/pages/Problems')
          }
        },
        {
          path: 'problems/:problem_id',
          components: {
            topbar: Topbar,
            main: () => import('@/pages/ProblemDetail')
          },
          children: [
            {
              path: '',
              name: 'OneProblemHome',
              redirect: {name: 'OneProblemDescription'}
            },
            {
              path: 'description',
              name: 'OneProblemDescription',
              component: () => import('@/components/OneProblem/OneProblemDescription')
            },
            {
              path: 'submissions',
              name: 'OneProblemSubmissions',
              component: () => import('@/components/OneProblem/OneProblemSubmissions')
            },
            {
              path: 'discuss',
              name: 'OneProblemDiscuss',
              component: () => import('@/components/OneProblem/OneProblemDiscuss')
            }
          ]
=======
        }, {
          path: 'user',
          name: 'User',
          components: {
            topbar: Topbar,
            main: User
          }
>>>>>>> master
        }
      ]
    }
  ]
});
