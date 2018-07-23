import IconText from '@/components/common/IconText.vue';
import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor, options = {}) {
    Vue.component('icon-text', IconText);
  }
};
