import { format as f, formatDistance as fd } from 'date-fns/esm';
import { enUS, zhCN } from 'date-fns/esm/locale';

const locales = { enUS, zhCN };
const localeId: keyof typeof locales = 'zhCN'; // 修改此处以全局修改日期格式化语言

/**
 * 日期格式化
 * @docs https://date-fns.org/v2.0.0-alpha.7/docs/format
 */
export function format(date: Date | string | number, formatStr: string, options: Options = {}) {
  return f(date, formatStr, { ...options, locale: locales[ localeId ] });
}


/**
 * 日期时间比较格式化
 * @docs https://date-fns.org/v2.0.0-alpha.7/docs/formatDistance
 */
export function formatDistance(date: Date | string | number,
                               baseDate: Date | string | number,
                               options: Options = {}) {
  return fd(date, baseDate, { ...options, locale: locales[ localeId ] });
}
