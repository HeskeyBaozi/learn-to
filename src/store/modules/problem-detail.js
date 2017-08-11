/**
 * Problem Detail Modules
 */
import {fetchProblemDetailById} from '@/api/problem-detail';

/**
 * State
 */
const state = {
  currentProblem: {
    problem_id: null,
    title: null,
    description: '',
    hint: '',
    difficulty: null,
    status: null,
    pass_times: 0,
    submission_times: 0
  }
};

/**
 * MutationTypes
 */
const SAVE_PROBLEM_DETAIL = 'SAVE_PROBLEM_DETAIL';

/**
 * Mutations
 */
const mutations = {
  [SAVE_PROBLEM_DETAIL]: (state, {problemDetail}) => {
    state.currentProblem = {
      ...state.currentProblem,
      ...problemDetail
    };
  }
};

/**
 * Actions Types
 */
export const INITIALIZE_PROBLEM_DETAIL_PAGE = 'INITIALIZE_PROBLEM_DETAIL_PAGE';
const RETRIEVE_PROBLEM_DESCRIPTION = 'RETRIEVE_PROBLEM_DESCRIPTION';

/**
 * Actions
 */
const actions = {
  [INITIALIZE_PROBLEM_DETAIL_PAGE]: async ({dispatch}, {problem_id}) => {
    await dispatch(RETRIEVE_PROBLEM_DESCRIPTION, {problem_id});
  },
  [RETRIEVE_PROBLEM_DESCRIPTION]: async ({commit}, {problem_id}) => {
    try {
      const json = await fetchProblemDetailById(problem_id);
      const {status, data} = json;
      if (status === 'OK') {
        commit({
          type: SAVE_PROBLEM_DETAIL,
          problemDetail: data
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
