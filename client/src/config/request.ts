import axios from 'axios';

import { message } from 'antd';

import history from '@/router/history';
import DOMAIN from './apiDomain';

axios.defaults.baseURL = DOMAIN();

export default function request(config) {
  const {
    method = 'get',
    url,
    data,
    params,
    handleError = false
  } = config;
  return new Promise((reslove, reject) => {
    axios({
      method,
      url,
      data,
      params,
      headers: {
        xToken: localStorage.getItem('xToken')
      },
      timeout: 10000
    }).then((data) => {
      const result = data.data;
      const { code, msg } = result;
      // 正常业务
      if (code === 200) {
        reslove(result.data);
        // 未登录
      } else if (code === 999) {
        history.replace('/login');
      } else {
        message.error(msg);
        if (handleError) {
          reject(result);
        }
      }
    }).catch((error) => {
      // console.log(error);
      message.error('服务器异常，请稍后再试')
      if (handleError) {
        reject(error);
      }
    })
  });
}