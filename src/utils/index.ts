import { format, formatDistance } from '@/utils/format';
import { request } from '@/utils/request';
import Vue from 'vue';

Vue.prototype.$request = request;
Vue.filter('format', format);
Vue.filter('formatDistance', formatDistance);

export default {
  format,
  formatDistance,
  request
};

declare module 'vue/types/vue' {
  interface Vue {
    $request: typeof request;
  }
}
