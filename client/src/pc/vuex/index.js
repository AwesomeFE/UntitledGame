import Vuex from 'vuex';
import { CommonStore } from '../../common';

export default () => new Vuex.Store(new CommonStore());
