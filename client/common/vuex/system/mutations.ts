import { Store } from './types';

import State = Store.System.State;
import Payload = Store.System.Payload;

export const mutations = {
  setUser(state: State, payload: Payload.User) {
    state.user = payload;
  }
};