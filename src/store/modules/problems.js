/**
 * Problems Modules
 */
import {fetchProblemsList, fetchTagsList} from '@/api/problems';

/**
 * MutationTypes
 */
const SAVE_PROBLEMS_LIST = 'SAVE_PROBLEMS_LIST';
const SAVE_TAGS_LIST = 'SAVE_TAGS_LIST';

/**
 * State
 */
const state = {
  problems: [],
  tags: []
};

/**
 * Mutations
 */
const mutations = {
  [SAVE_PROBLEMS_LIST]: (state, {list}) => {
    state.problems = [...state.problems, ...list];
  },
  [SAVE_TAGS_LIST]: (state, {list}) => {
    state.tags = [...state.tags, ...list];
  }
};

/**
 * Actions Types
 */
export const INITIALIZE_PROBLEMS_PAGE = 'INITIALIZE_PROBLEMS_PAGE';
const RETRIEVE_PROBLEMS_LIST = 'RETRIEVE_PROBLEMS_LIST';
const RETRIEVE_TAGS_LIST = 'RETRIEVE_TAGS_LIST';

/**
 * Actions
 */
const actions = {
  [INITIALIZE_PROBLEMS_PAGE]: async ({dispatch}) => {
    await dispatch(RETRIEVE_PROBLEMS_LIST);
    await dispatch(RETRIEVE_TAGS_LIST);
  },
  [RETRIEVE_PROBLEMS_LIST]: async ({commit}) => {
    try {
      const json = await fetchProblemsList();
      const {status, data} = json;
      if (status === 'OK') {
        commit({
          type: SAVE_PROBLEMS_LIST,
          list: data
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  [RETRIEVE_TAGS_LIST]: async ({commit}) => {
    try {
      const json = await fetchTagsList();
      const {status, data} = json;
      if (status === 'OK') {
        commit({
          type: SAVE_TAGS_LIST,
          list: data
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
};

/**
 * Getters
 */
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
