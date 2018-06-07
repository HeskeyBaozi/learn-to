/**
 * 全局状态模块汇总
 */
import Vue from 'vue';
import Vuex, { Module, Store } from 'vuex';
import todos from './example';

Vue.use(Vuex);

// 模块放置于此对象中即可
const modules = {
  todos
};

type ModuleState<M> = M extends Module<infer S, any> ? S : {};

// 根Store的状态类型, 常用于组件中根状态标注
export type RootState = {
  [P in keyof typeof modules]: ModuleState<(typeof modules)[P]>
};

const rootStore = new Vuex.Store<RootState>({
  modules,
  strict: process.env.NODE_ENV !== 'production'
});

// 根Store类型
export type RootStore = typeof rootStore;

export default rootStore;
