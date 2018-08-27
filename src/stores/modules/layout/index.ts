import { Module } from 'vuex';
import {
  IS_COLLAPSE,
  IS_LOGIN_DIALOG_VISIBLE,
  MODIFY_IS_COLLAPSE,
  MODIFY_IS_LOGIN_DIALOG_VISIBLE,
  TOGGLE_COLLAPSE
} from './contants';
import { State } from './typings';

export default {
  namespaced: true,
  state: () => ({
    isCollapse: true,
    isLoginDialogVisible: false
  }),
  mutations: {
    [MODIFY_IS_COLLAPSE](state, { isCollapse }: Pick<State, 'isCollapse'>) {
      state.isCollapse = isCollapse;
    },
    [TOGGLE_COLLAPSE](state) {
      state.isCollapse = !state.isCollapse;
    },
    [MODIFY_IS_LOGIN_DIALOG_VISIBLE](state, { isLoginDialogVisible }: Pick<State, 'isLoginDialogVisible'>) {
      state.isLoginDialogVisible = isLoginDialogVisible;
    }
  },
  getters: {
    [IS_COLLAPSE](state) {
      return state.isCollapse;
    },
    [IS_LOGIN_DIALOG_VISIBLE](state) {
      return state.isLoginDialogVisible;
    }
  }
} as Module<State, any>;
