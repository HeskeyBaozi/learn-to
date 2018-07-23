import IconText from '@/components/common/IconText.vue';
import MarkdownText from '@/components/common/MarkdownText.vue';
import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor, options = {}) {
    Vue.component('icon-text', IconText);
    Vue.component('markdown-text', MarkdownText);
  }
};