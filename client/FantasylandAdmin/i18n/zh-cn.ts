import { messageTypes } from "../constants";

export default {
  Fantasyland: 'Fantasyland',
  home: '首页',
  account: '账号',
  settings: '设置',
  submit: '递交',
  cancel: '退出',
  signin: '登录',
  signout: '登出',
  username: '用户名',
  password: '密码',
  description: '描述',
  upload: '文件上传',
  userList: '用户列表',

  enemyList: '敌人列表',
  enemyBisic: '敌人基础信息',
  enemyAbility: '敌人能力参数',
  name: '名称',
  gender: '性别',
  XP: '经验值',
  HP: '生命值',
  MP: '魔法值',
  STR: '力量',
  AGI: '敏捷',
  VIT: '耐力',
  INT: '智力',
  DEX: '命中',
  LUK: '幸运',

  buffList: '状态列表',
  buffBisic: '状态基础信息',
  tip: '状态简述',
  recover: '状态恢复类型',
  total: '恢复总量',
  isIncrease: '是否增量',
  maintain: '持续时间',

  consumableList: '消费品列表',

  USER_NOT_FOUND: '用户不存在',
  PASSWORD_INVALID: '密码不正确',
  
  [messageTypes.PLEASE_SIGNIN]: '请登录您的账号',
  [messageTypes.FIELD_REQUIRED]: '请输入{fieldName}',
};