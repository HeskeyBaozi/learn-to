import G2 from '@antv/g2/lib/core';
import '@antv/g2/lib/geom/interval';
import '@antv/g2/lib/geom/line';
import '@antv/g2/lib/geom/point';
import G2Type from '@antv/g2/src';

import DataSet from '@antv/data-set/src';
import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor, options = {}) {
    Vue.prototype.$G2 = G2;
    Vue.prototype.$DataSet = DataSet;
  }
};

declare module 'vue/types/vue' {
  interface Vue {
    $G2: typeof G2Type;
    $DataSet: any;
  }
}
