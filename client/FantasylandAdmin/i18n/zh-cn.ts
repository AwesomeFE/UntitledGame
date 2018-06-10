import { messageTypes } from "../constants";

export default {
  Fantasyland: 'Fantasyland',
  home: '首页',
  account: '账号',
  settings: '设置',
  signin: '登录',
  signout: '登出',
  username: '用户名',
  password: '密码',
  [messageTypes.PLEASE_SIGNIN]: '请登录您的账号',
  [messageTypes.FIELD_REQUIRED]: '请输入{fieldName}',
};