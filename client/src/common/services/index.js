import Vue from 'vue';
import axios from 'axios';

/**
 * Redefine server response success process
 * @name responseSuccess
 * @param {*} response 
 * @returns {Promise.reject|Object} result
 */
const responseSuccess = response => {
  // 获取response的code
  const { status } = response.data;

  return status >= 400
    // 如果code大于400则promise报错
    ? Promise.reject(response.data)
    // 成功则返回数据
    : response.data;
};

/**
 * 重定义服务器响应失败逻辑
 * @param {*} error 
 */
const responseFailed = error => {
  const { status } = error.response;

  status >= 400 && status < 500
    ? alert('页面错误，请联系管理员')
    : alert('服务器响应错误，请联系管理员');

  return Promise.reject(error);
};

export function initService() {
  axios.interceptors.response.use(responseSuccess, responseFailed);

  Vue.config.errorHandler = (error, vm, info) => {
    console.log(error);
    alert(error);
  };
};

export { User } from './user';