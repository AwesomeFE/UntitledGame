import { User } from '../../services';

export const actions = {
  async getUser({ commit, state }) {
    const { data } = await User.getSessionUser();
    commit('setUser', data);
  },
  async signin({ commit, state }, formData) {
    await User.signin(formData);
  },
  async signup({ commit, state }, formData) {
    await User.signup(formData);
  }
};
