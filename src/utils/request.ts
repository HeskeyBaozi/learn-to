import axios, { AxiosResponse } from 'axios';
import { Notification } from 'element-ui';

export const request = axios.create({ timeout: 5000 });

request.interceptors.response.use(
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
