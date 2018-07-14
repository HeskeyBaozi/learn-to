/**
 * 请求用的函数工具，使用axios
 */
import axios, { AxiosResponse } from 'axios';
import { Notification } from 'element-ui';

// 可添加其他相关配置，如csrf等
export const httpRequest = axios.create({
  timeout: 5000,
  baseURL: '/api'
});

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
    }
    Notification.error({
      title: response && response.data && response.data.msg || `请求错误`,
      message
    });
    return Promise.reject<AxiosResponse<any>>(response);
  }
);
