/**
 * 按需引入 Font-Awesome 免费图标
 * 所有可用图标 https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free
 * 图标大部分分为以下三类
 * solid：大部分是黑底图标
 * regular：大部分是白底图标
 * brands：名牌图标、公司LOGO等
 *
 * !!请注意
 * !!所有图标必须通过 fontawesome.library.add(...) 引入了才能使用
 */
import fontawesome from '@fortawesome/fontawesome';
import { faGithub, faWeibo } from '@fortawesome/fontawesome-free-brands';
import { faBell, faListAlt } from '@fortawesome/fontawesome-free-regular';
import { faLock, faUser } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

// 添加 solid 图标，可以不用传数组，直接传入名称即可
// e.g. <fa-icon icon="user"/>
fontawesome.library.add(...[faUser, faLock]);

// 添加 regular 图标，需要传入数组
// e.g. <fa-icon :icon="['far', 'list-alt']"/>
fontawesome.library.add(...[faListAlt, faBell]);

// 添加 brands 图标，需要传入数组
// e.g. <fa-icon :icon="['fab', 'github']"/>
fontawesome.library.add(...[faGithub, faWeibo]);

Vue.component('fa-icon', FontAwesomeIcon);
