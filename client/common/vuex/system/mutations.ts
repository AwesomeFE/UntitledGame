import { Store } from '../../types';

export const mutations = {
  setUser(state: Store.System.State, user: Store.System.User) {
    state.user = user;
  }
};