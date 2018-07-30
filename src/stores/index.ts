import authorization from '@/stores/modules/authorization';
import loading from '@/stores/modules/loading';
import { enhanceWithLoadingModule } from '@/stores/plugins/enhanceAction';
import { ModuleState } from '@/typings/vuex';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 模块放置于此对象中即可
const modules = {
  authorization,
  loading
};

const rootStore = new Vuex.Store<RootState>({
  modules,
  plugins: [enhanceWithLoadingModule],
  strict: process.env.NODE_ENV !== 'production'
});

export type RootStore = typeof rootStore;

export type RootState = {
  [P in keyof typeof modules]: ModuleState<(typeof modules)[P]>
};

export default rootStore;
