/**
 * 全局状态模块汇总
 */
import { enhanceWithLoadingModule } from '@/stores/plugins/enhanceAction';
import Vue from 'vue';
import Vuex, { Module, Store } from 'vuex';
import todos from './modules/example';
import loading, { FINISHED_RUNNING, START_RUNNING } from './modules/loading';

Vue.use(Vuex);

// 模块放置于此对象中即可
const modules = {
  todos,
  loading
};

type ModuleState<M> = M extends Module<infer S, any> ? S : {};

// 根Store的状态类型, 常用于组件中根状态标注
export type RootState = {
  [P in keyof typeof modules]: ModuleState<(typeof modules)[P]>
};

const rootStore = new Vuex.Store<RootState>({
  modules,
  plugins: [enhanceWithLoadingModule],
  strict: process.env.NODE_ENV !== 'production'
});

export interface IAction {
  type: string;
  payload: any;
}

// 根Store类型
export type RootStore = typeof rootStore;

export default rootStore;
