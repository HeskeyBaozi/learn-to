/**
 * 按需引入 Font-Awesome 免费图标
 * 所有可用图标
 * https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free
 * 图标大部分分为以下三类
 * solid：大部分是黑底图标
 * regular：大部分是白底图标
 * brands：名牌图标、公司LOGO等
 *
 * !!请注意
 * !!所有图标必须通过 fontawesome.library.add(...) 引入了才能使用
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faWeibo } from '@fortawesome/free-brands-svg-icons';
import {
  faUser
} from '@fortawesome/free-regular-svg-icons';
import {
  faChartBar,
  faCheck,
  faClipboardList,
  faHome,
  faIndent,
  faKeyboard,
  faLock,
  faUndo,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor, options = {}) {
    // 添加 solid 图标，可以不用传数组，直接传入名称即可
    // e.g. <fa-icon icon="user"/>
    library.add(
      faUserCircle,
      faIndent,
      faHome,
      faClipboardList,
      faChartBar,
      faLock,
      faCheck,
      faUndo,
      faKeyboard
    );

    // 添加 regular 图标，需要传入数组
    // e.g. <fa-icon :icon="['far', 'list-alt']"/>
    library.add(
      faUser
    );

    // 添加 brands 图标，需要传入数组
    // e.g. <fa-icon :icon="['fab', 'github']"/>
    library.add(

    );

    Vue.component('fa-icon', FontAwesomeIcon);
  }
};
