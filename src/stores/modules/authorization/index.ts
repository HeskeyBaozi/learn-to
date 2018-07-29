import { httpRequestSilence } from '@/utils/httpRequest';
import { Module } from 'vuex';
import {
  IS_LOGIN,
  ON_ALREADY_LOGIN,
  QUERY_LOGIN_STATUS
} from './contants';
import { State } from './typings';

export default {
  namespaced: true,
  state: () => ({
    role: 'guest'
  }),
  mutations: {
    [ON_ALREADY_LOGIN](state, { role }: { role: State['role'] }) {
      state.role = role;
    }
  },
  getters: {
    [IS_LOGIN](state) {
      return state.role !== 'guest';
    }
  },
  actions: {
    async [QUERY_LOGIN_STATUS]({ commit }) {
      try {
        await httpRequestSilence.get(`/auth/login`);
        commit(ON_ALREADY_LOGIN, { role: 'user' });
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error.response.status === 404);
      }
    }
  }
} as Module<State, any>; // 指定为模块类型，增强编辑器自动提示
