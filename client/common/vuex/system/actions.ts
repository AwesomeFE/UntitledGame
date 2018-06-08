import { Commit } from 'vuex';
import { State } from './state';
import { User } from '../../services';
import FormData from '../../services/user/index.d';

interface Context {
  commit: Commit,
  state: State
};

export const actions = {
  async getUser(context: Context) {
    const { commit } = context;
    const { data } = await User.getSessionUser();
    commit('setUser', data);
  },
  async signin(context: Context, formData: FormData.Signin) {
    const { commit } = context;
    const { data } = await User.signin(formData);
    commit('setUser', data);
  },
  async signup(context: Context, formData: FormData.Signin) {
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
