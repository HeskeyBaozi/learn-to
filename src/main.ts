/**
 * App 应用入口
 */
import ElementUI from '@/plugins/element-ui';
import FontAwesome from '@/plugins/font-awesome';
import '@/registerServiceWorker';
import store from '@/stores';
import DateFormat from '@/utils/format';
import router from '@/views/router';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(FontAwesome);
Vue.use(DateFormat);

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
});


// start!
app.$mount('#app');
