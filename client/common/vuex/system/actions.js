import { User } from '../../services';

export const actions = {
  async getUser({ commit, state }) {
    const { data } = await User.getSessionUser();
    commit('setUser', data);
  },
  async signin({ commit, state }, formData) {
    const { data } = await User.signin(formData);
    commit('setUser', data);
  },
  async signup({ commit, state }, formData) {
    const { data } = await User.signup(formData);
    commit('setUser', data);
  },
  async signout({ commit, state }) {
    const { data } = await User.signout();
    commit('setUser', data);
  }
};
