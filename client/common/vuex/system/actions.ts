import { Commit } from 'vuex';
import { Store } from '../../types';
import { User } from '../../services';

interface Context {
  commit: Commit,
  state: Store.System.State
};

export const actions = {
  async getUser(context: Context) {
    const { commit } = context;
    const { data: { data } } = await User.getSessionUser();
    commit('setUser', data);
  },
  async signin(context: Context, formData: Store.System.FormData.Signin) {
    const { commit } = context;
    const { data: { data } } = await User.signin(formData);
    commit('setUser', data);
  },
  async signup(context: Context, formData: Store.System.FormData.Signin) {
    const { commit } = context;
    const { data: { data } } = await User.signup(formData);
    commit('setUser', data);
  },
  async signout(context: Context) {
    const { commit } = context;
    const { data: { data } } = await User.signout();
    commit('setUser', data);
  }
};
