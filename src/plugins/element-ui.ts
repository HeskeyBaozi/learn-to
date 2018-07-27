/**
 * 按需引入 Element UI
 * 查看引入详情 http://element-cn.eleme.io/#/zh-CN/component/quickstart
 * 请参考官方是如何引入的 https://github.com/ElemeFE/element/blob/dev/src/index.js
 */

import {
  Aside,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Checkbox,
  Col,
  Container,
  Dialog,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  Loading,
  Main,
  Menu,
  MenuItem,
  Notification,
  Option,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Row,
  Select,
  Table,
  TableColumn,
  Tag,
  Tooltip
} from 'element-ui';
import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor, options = {}) {
    // Element UI 目前全局设定
    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

    // 引入组件
    const components = [
      Aside,
      Button,
      ButtonGroup,
      Card,
      Carousel,
      CarouselItem,
      Checkbox,
      Col,
      Container,
      Input,
      Dialog,
      Footer,
      Form,
      FormItem,
      Header,
      Main,
      Menu,
      MenuItem,
      Aside,
      Option,
      Pagination,
      Progress,
      Radio,
      RadioGroup,
      Row,
      Select,
      Table,
      TableColumn,
      Tag,
      Tooltip,
      (Loading as any).directive
    ];
    for (const component of components) {
      Vue.use(component);
    }

    // 原型链方法引入
    Vue.prototype.$notify = Notification; // 通知
    Vue.prototype.$loading = Loading.service; // 全局加载框
  }
};
