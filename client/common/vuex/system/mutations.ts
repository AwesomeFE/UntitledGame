import { State, User } from './state';

export const mutations = {
  setUser(state: State, user: User) {
    state.user = user;
  }
};