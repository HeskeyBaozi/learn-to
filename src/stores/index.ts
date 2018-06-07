import Vue from 'vue';
import Vuex, { Module, Store } from 'vuex';
import todos from './example';

Vue.use(Vuex);

const modules = {
  todos
};

type ModuleState<M> = M extends Module<infer S, any> ? S : {};

export type RootState = {
  [P in keyof typeof modules]: ModuleState<(typeof modules)[P]>
};

const rootStore = new Vuex.Store<RootState>({
  modules,
  strict: process.env.NODE_ENV !== 'production'
});

export type RootStore = typeof rootStore;

export default rootStore;
