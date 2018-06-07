/**
 * App 应用入口
 */
import Vue from 'vue';
import App from './App.vue';
import './element-ui';
import './font-awesome';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './utils';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
