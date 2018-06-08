import Vuex from 'vuex';
import CommonStore from '../../common/vuex';

class Store extends CommonStore {
  constructor() {
    super();
  }
}

export default () => new Vuex.Store(new Store());
