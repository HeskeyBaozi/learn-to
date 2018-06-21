import { IAction } from '@/stores';
import { FINISHED_RUNNING, START_RUNNING } from '@/stores/modules/loading';
import { Store } from 'vuex';

/**
 * 使用猴子补丁增强dispatch方法, 类似redux-middleware
 * @author 何志宇<hezhiyu233@foxmail.com>
 * 对于非loading模块
 * 每当触发Action时，rootState.loading.get(<action-type>) === <action-payload>
 * Action结束时, rootState.loading.get(<action-type>) === undefined
 */
export function enhanceWithLoadingModule<S>(store: Store<S>) {
  const oldDispatch = store.dispatch;

  store.dispatch = async function enhancedDispatch(
    typeOrPayloadWithType: string | IAction,
    second?: any,
    third?: any
  ) {
    const type =
      typeof typeOrPayloadWithType === 'string'
        ? typeOrPayloadWithType
        : typeOrPayloadWithType.type;
    const payload =
      typeof typeOrPayloadWithType === 'string'
        ? second
        : typeOrPayloadWithType.payload;
    const options = typeof typeOrPayloadWithType === 'string' ? third : second;
    if (!type.startsWith('loading')) {
      store.commit(`loading/${START_RUNNING}`, { type, payload });
    }
    const result = await oldDispatch(type, payload, options);
    if (!type.startsWith('loading')) {
      store.commit(`loading/${FINISHED_RUNNING}`, { type, payload });
    }
    return result;
  };
}
