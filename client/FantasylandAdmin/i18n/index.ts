import VueI18n from 'vue-i18n';
import zhCN from './zh-cn';

export default () => new VueI18n({
  locale: 'zh-cn',
  messages: {
    'zh-cn': zhCN
  }
});