import { ActionObject } from '@/typings/vuex';
import { Module } from 'vuex';

export type IState = Map<string, object>;

export const START_RUNNING = 'START_RUNNING';
export const FINISHED_RUNNING = 'FINISHED_RUNNING';

export default {
  namespaced: true,
  state: () => new Map<string, object>(),
  mutations: {
    [START_RUNNING](state, { type, ...payload }: ActionObject) {
      state.set(type, payload);
    },
    [FINISHED_RUNNING](state, { type }: ActionObject) {
      state.delete(type);
    }
  }
} as Module<IState, any>;
