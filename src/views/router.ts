/**
 * 全局路由配置
 */
import BasicLayout from '@/layouts/BasicLayout.vue';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './TheHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasicLayout,
      children: [
        {
          path: '',
          name: '',
          component: Home
        },
        {
          path: 'home',
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
            }
          ]
        },
        {
          path: 'statistic',
          component: () => import('./statistic/Statistic.vue'),
          children: [
            {
              path: 'ranks',
              name: 'ranks',
              component: () => import('./statistic/TheRanks.vue')
            }
          ]
        },
        {
          path: 'g2-example',
          component: () => import('./G2Example.vue')
        },
        {
          path: 'markdown',
          component: () => import('./MarkdownExample.vue')
        }
      ]
    }
  ]
});
