import BasicLayout from '@/layouts/BasicLayout.vue';
import store from '@/stores';
import { QUERY_LOGIN_STATUS } from '@/stores/modules/authorization/contants';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './TheHome.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasicLayout,
      async beforeEnter(to, from, next) {
        await store.dispatch(`authorization/${QUERY_LOGIN_STATUS}`);
        next();
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'problems',
          name: 'problems',
          component: () => import('./problem-library/ProblemList.vue')
        },
        {
          path: 'problem/:problemId',
          component: () => import('./problem/Problem.vue'),
          children: [
            {
              path: '',
              name: 'description',
              component: () => import('./problem/ProblemDescription.vue')
            },
            {
              path: 'solution',
              name: 'solution',
              component: () => import('./problem/SolutionArea.vue')
            },
            {
              path: 'records',
              name: 'records',
              component: () => import('./problem/SubmitRecords.vue')
            },
            {
              path: 'score',
              name: 'score',
              component: () => import('./problem/ScoreReport.vue')
            }
          ]
        },
        {
          path: 'user',
          component: () => import('./user/User.vue'),
          children: [
            {
              path: '',
              name: 'information',
              component: () => import('./user/UserInformation.vue')
            },
            {
              path: ':userId',
              name: 'as',
              component: () => import('./user/UserProfile.vue')
            }
          ]
        },
        {
          path: 'statistic',
          component: () => import('./statistic/Statistic.vue')
        },
        {
          path: 'statistic/ranks',
          name: 'ranks',
          component: () => import('./statistic/TheRanks.vue')
        },
        {
          path: 'statistic/recent',
          name: 'recent',
          component: () => import('./statistic/RecentTests.vue')
        },
        {
          path: 'g2-example',
          component: () => import('./G2Example.vue')
        },
        {
          path: 'markdown',
          component: () => import('./MarkdownExample.vue')
        },
        {
          path: 'notification',
          component: () => import('./notification/UserNotification.vue')
        }
      ]
    }
  ]
});

export default router;
