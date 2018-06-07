import { RootState } from '@/store';
import { Module } from 'vuex';

export interface ITodo {
  title: string;
  done: boolean;
}

export interface IState {
  todos: ITodo[];
  filter: {
    unfinishedOnly: boolean;
    searchText: string;
  };
}

export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const SET_TODOS_LIST = 'SET_TODOS_LIST';
export const FINISHED_LIST = 'FINISHED_LIST';

export default {
  namespaced: true,
  state: () => ({
    todos: [],
    filter: {
      unfinishedOnly: false,
      searchText: ''
    }
  }),
  mutations: {
    [SET_TODOS_LIST](state, { list }: { list: ITodo[] }) {
      state.todos.push(...list);
    }
  },
  getters: {
    [FINISHED_LIST](state, getters) {
      return state.todos.filter(({ done }) => done);
    }
  },
  actions: {
    async [FETCH_TODO_LIST](
      { dispatch, commit, state, getters },
      payload: any
    ) {
      const list = await new Promise<ITodo[]>((resolve) => {
        setTimeout(() => {
          resolve([{ title: 'TestTitle', done: false }]);
        }, 500);
      });
      commit(SET_TODOS_LIST, { list });
    }
  }
} as Module<IState, any>;
