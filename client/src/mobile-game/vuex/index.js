import Vuex from 'vuex';
import * as Player from './Player';
import * as GameResource from './GameResource';
import CommonStore from '../../common/vuex';

export default () => new Vuex.Store(new CommonStore({
  modules: {
    GameResource,
    Player
  }
}));
