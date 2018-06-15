import { Store } from './types';
import { User } from '../../services';

import Context = Store.System.Context;
import Payload = Store.System.Payload;

export const actions = {
  async getUser(context: Context) {
    const { commit } = context;
    const { data } = await User.getSessionUser();
    commit('setUser', data);
  },
  async signin(context: Context, payload: Payload.SignIn) {
    const { commit } = context;
    const { data } = await User.signin(payload);
    commit('setUser', data);
  },
  async signup(context: Context, payload: Payload.SignUp) {
    const { commit } = context;
    const { data } = await User.signup(payload);
    commit('setUser', data);
  },
  async signout(context: Context) {
    const { commit } = context;
    const { data } = await User.signout();
    commit('setUser', data);
  }
};
