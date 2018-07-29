import axios, { AxiosResponse } from 'axios';
import { Notification } from 'element-ui';

const instanceConfig = {
  timeout: 5000,
  baseURL: '/api'
};

export const httpRequest = axios.create(instanceConfig); // 请求对象，通常情况下使用此请求器
export const httpRequestSilence = axios.create(instanceConfig); // 请求对象，但不会在错误的时候调用 Notification

// 请求拦截器
httpRequest.interceptors.response.use(
  (response) => response,
  (error): Promise<AxiosResponse<any>> => {
    const { response, config, code } = error;
    const message = `${config.method.toUpperCase()} ${config.url}`;
    if (code && code === 'ECONNABORTED') {
      Notification.error({
        title: '请求超时',
        message
      });
    } else {
      Notification.error({
        title: response && response.data && response.data.msg || `请求错误`,
        message
      });
    }
    return Promise.reject<AxiosResponse<any>>(response);
  }
);
