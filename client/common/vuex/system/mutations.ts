import { System } from './types';

import State = System.State;
import Payload = System.Payload;

export const mutations = {
  setUser(state: State, payload: Payload.User) {
    state.user = payload;
  }
};