import { RootState } from '@/stores';
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

// 类型常量通常需要被导出，因为组件里会直接用到
export const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
export const SET_TODOS_LIST = 'SET_TODOS_LIST';
export const FINISHED_LIST = 'FINISHED_LIST';

export default {
  namespaced: true, // 启用命名空间
  state: () => ({ // 写成函数形式防止某些情况下的共用污染，参考Vue的data
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
    // getters['todos/FINISHED_LIST']
    [FINISHED_LIST](state, getters) {
      return state.todos.filter(({ done }) => done);
    }
  },
  actions: {
    async [FETCH_TODO_LIST](
      { dispatch, commit, state, getters },
      payload: { page: number } | string // 负载通常需要类型标注
    ) {
      // tslint:disable-next-line:no-console
      console.log('Received payload', payload);
      const list = await new Promise<ITodo[]>((resolve) => {
        setTimeout(() => {
          resolve([{ title: 'TestTitle', done: false }]);
        }, 500);
      });
      commit(SET_TODOS_LIST, { list });
    }
  }
} as Module<IState, any>; // 指定为模块类型，增强编辑器自动提示
