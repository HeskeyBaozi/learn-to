/**
 * App 应用入口
 */
import Vue from 'vue';
import App from './App.vue';
import './element-ui';
import './font-awesome';
import './registerServiceWorker';
import router from './router';
import store from './stores';
import './utils';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

Vue.extend({
  data() {
    return {
      count: 1
    };
  },
  props: {
    content: { type: String }
  },
  computed: {
    str(): string {
      return this.content;
    }
  }
});
