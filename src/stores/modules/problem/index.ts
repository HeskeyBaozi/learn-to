import { httpRequestSilence } from '@/utils/httpRequest';
import { Module } from 'vuex';
import {
  GET_PROBLEM_LIST,
  GET_PROBLEMITEM,
  GET_SUBMIT_RECORD,
  PROBLEM_LIST_LENGTH,
  SET_ACTIVE_TAB,
  SET_PROBLEM_INDEX,
  SET_PROBLEM_LIST,
  SET_PROBLEMITEM,
  SET_RECORD,
  SET_SUBMIT_RECORD
} from './contants';
import { State } from './typings';

export default {
  namespaced: true,
  state: () => ({
    problemItem: {
      name: '',
      publish: '',
      submit: 0,
      passNum: 0,
      spaceLimit: 0,
      timeLimit: 0
    },
    problemSubmitRecord: [],
    submitRecord: '',
    activeTab: 'description',
    problemList: [],
    problemIndex: 0
  }),
  mutations: {
    [SET_PROBLEMITEM](state, payload) {
      state.problemItem = payload;
    },

    [SET_SUBMIT_RECORD](state, payload) {
      state.problemSubmitRecord = payload;
    },

    [SET_RECORD](state, record: string) {
      state.submitRecord = record;
    },

    [SET_ACTIVE_TAB](state, tab: string) {
      state.activeTab = tab;
    },

    [SET_PROBLEM_LIST](state, payload) {
      state.problemList = payload;
    },

    [SET_PROBLEM_INDEX](state, index: number) {
      state.problemIndex = index;
    }
  },
  getters: {
    [PROBLEM_LIST_LENGTH](state) {
      return state.problemList.length;
    }
  },
  actions: {
    async [GET_PROBLEMITEM]({ commit }, problemId: number) {
      try {
        const result = await httpRequestSilence.get(`/problem/${problemId}`);
        if (result.status === 200 && result.statusText === 'OK') {
          commit(SET_PROBLEMITEM, result.data);
        }
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    },

    async [GET_SUBMIT_RECORD]({ commit }) {
      try {
        const result = await httpRequestSilence.get('/libraries/0/problems/record/201');
        // tslint:disable-next-line:no-console
        console.log(result);
        commit(SET_SUBMIT_RECORD, result.data);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    },

    async [GET_PROBLEM_LIST]({ commit }) {
      try {
        // mock data
        const result = await httpRequestSilence.get('/libraries/0/problems');
        commit(SET_PROBLEM_LIST, result.data);
        // const result = await httpRequestSilence.get('/problems');
        // commit(SET_PROBLEM_LIST, result.data.data);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    }
  }
} as Module<State, any>; // 指定为模块类型，增强编辑器自动提示
