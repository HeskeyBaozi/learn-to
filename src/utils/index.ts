import { format, formatDistance } from '@/utils/format';
import { request } from '@/utils/request';
import Vue from 'vue';


Vue.filter('format', format); // 组建内可以使用日期格式化过滤器
Vue.filter('formatDistance', formatDistance);

export default {
  format,
  formatDistance,
  request
};

// 组件暂时不引用请求函数，也尽量别这么用。请求函数一般用在action中
// Vue.prototype.$request = request;

// declare module 'vue/types/vue' {
//   interface Vue {
//     $request: typeof request;
//   }
// }
