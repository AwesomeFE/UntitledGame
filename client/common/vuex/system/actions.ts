import { Commit } from 'vuex';
import { Types } from '../../types';
import { User } from '../../services';

interface Context {
  commit: Commit,
  state: Types.Store.System.State
};

export const actions = {
  async getUser(context: Context) {
    const { commit } = context;
    const { data } = await User.getSessionUser();
    commit('setUser', data);
  },
  async signin(context: Context, formData: Types.FormData.Signin) {
    const { commit } = context;
    const { data } = await User.signin(formData);
    commit('setUser', data);
  },
  async signup(context: Context, formData: Types.FormData.Signin) {
    const { commit } = context;
    const { data } = await User.signup(formData);
    commit('setUser', data);
  },
  async signout(context: Context) {
    const { commit } = context;
    const { data } = await User.signout();
    commit('setUser', data);
  }
};
