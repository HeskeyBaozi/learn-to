import fd from 'date-fns/distance_in_words';
import f from 'date-fns/format';
import zhCN from 'date-fns/locale/zh_cn';
import { VueConstructor } from 'vue';

const locales = { zhCN };
const localeId: keyof typeof locales = 'zhCN'; // 修改此处以全局修改日期格式化语言

/**
 * 日期格式化
 * @docs https://date-fns.org/v1.29.0/docs/format
 */
export function format(
  date: Date | string | number,
  formatStr: string = 'YYYY年M月DD日 h时mm分',
  options: object = {}
) {
  return f(date, formatStr, { ...options, locale: locales[localeId] });
}

/**
 * 日期时间比较格式化
 * @docs https://date-fns.org/v1.29.0/docs/distanceInWords
 */
export function formatDistance(
  dateToCompare: Date | string | number,
  date: Date | string | number,
  options: object = {}
) {
  return fd(dateToCompare, date, { ...options, locale: locales[localeId], addSuffix: true });
}

export default {
  install(Vue: VueConstructor, options = {}) {
    Vue.filter('format', format); // 组建内可以使用日期格式化过滤器
    Vue.filter('formatDistance', formatDistance);
  }
};
