import Vuex from 'vuex';
import CommonStore from '../../common/vuex';

export default () => new Vuex.Store(new CommonStore());
