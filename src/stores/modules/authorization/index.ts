import { LoginFormFields, RegisterFormFields } from '@/typings/auth';
import { httpRequest, httpRequestSilence } from '@/utils/httpRequest';
import { Module } from 'vuex';
import {
  IS_LOGIN,
  LOG_IN,
  LOG_OUT,
  MODIFY_ROLE,
  QUERY_LOGIN_STATUS,
  REGISTER,
  ROLE
} from './contants';
import { LoginSuccessData, State } from './typings';

export default {
  namespaced: true,
  state: () => ({
    role: 'guest'
  }),
  mutations: {
    [MODIFY_ROLE](state, { role }: { role: State['role'] }) {
      state.role = role;
    }
  },
  getters: {
    [IS_LOGIN](state) {
      return state.role !== 'guest';
    },
    [ROLE](state) {
      return state.role;
    }
  },
  actions: {
    async [QUERY_LOGIN_STATUS]({ commit }) {
      try {
        await httpRequestSilence.get(`/auth/login`);
        commit(MODIFY_ROLE, { role: 'user' });
      } catch (error) {
        // noop
      }
    },
    async [LOG_IN]({ commit }, { fields }: { fields: LoginFormFields }) {
      let response;
      try {
        response = await httpRequest.post<LoginSuccessData>(
          `/auth/login`,
          {
            username: fields.username,
            password: fields.password,
            captcha: fields.captcha
          }
        );
        const { statusText, data } = response;
        if (statusText === 'ok') {
          commit(MODIFY_ROLE, { role: data.role });
        }
      } catch (error) {
        response = error;
      }
      return {
        response
      };
    },
    async [REGISTER]({ commit }, { fields }: { fields: RegisterFormFields }) {
      try {
        const response = await httpRequest.post(`/auth/signup`, {
          username: fields.username,
          password: fields.password,
          repassword: fields.repassword,
          email: fields.email
        });
        // tslint:disable-next-line:no-console
        console.log(response);
      } catch (error) {
        // tslint:disable-next-line:no-console
      }
    },
    async [LOG_OUT]({ commit }) {
      try {
        // await httpRequest.post(`/auth/logout`);
        commit(MODIFY_ROLE, { role: 'guest' });
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error.response);
      }
    }
  }
} as Module<State, any>;
