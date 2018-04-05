import Vuex from 'vuex';
import * as Player from './Player';
import * as GameResource from './GameResource';
import { CommonStore } from '../../common';

export default () => new Vuex.Store(new CommonStore({
  modules: {
    GameResource,
    Player
  }
}));
