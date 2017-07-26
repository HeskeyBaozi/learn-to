import Vue from 'vue'
import Router from 'vue-router'
import Topbar from '@/components/Topbar'
import Home from '@/pages/Home'
import Main from '@/pages/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          components: {
            topbar: Topbar,
            main: Home
          }
        }
      ]
    }
  ]
})
