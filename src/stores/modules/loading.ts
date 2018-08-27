import { ActionObject } from '@/typings/vuex';
import Vue from 'vue';
import { Module } from 'vuex';

export interface State {
  [key: string]: any;
}

export const START_RUNNING = 'START_RUNNING';
export const FINISHED_RUNNING = 'FINISHED_RUNNING';

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {
    [START_RUNNING](state, { type, ...payload }: ActionObject) {
      Vue.set(state, type, payload);
    },
    [FINISHED_RUNNING](state, { type }: ActionObject) {
      Vue.delete(state, type);
    }
  }
} as Module<State, any>;
