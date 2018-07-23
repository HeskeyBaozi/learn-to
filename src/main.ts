/**
 * App 应用入口
 */
import CommonComponents from '@/plugins/common';
import ElementUI from '@/plugins/element-ui';
import FontAwesome from '@/plugins/font-awesome';
import G2 from '@/plugins/g2';
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
Vue.use(G2);
Vue.use(CommonComponents);


const app = new Vue({
  router,
  store,
  render: (h) => h(App)
});


// start!
app.$mount('#app');
