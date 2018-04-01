import VueI18n from 'vue-i18n';
import zhCn from './zh-cn.yaml';

export default () => new VueI18n({
  locale: 'zh-cn',
  messages: {
    'zh-cn': zhCn
  }
});