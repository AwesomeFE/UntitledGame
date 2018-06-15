import { Store } from './types';

import State = Store.Modal.LoadingModal.State;

export const mutations = {
  show(state: State) {
    state.isShow = true;
  },
  hide(state: State) {
    state.isShow = false;
  },
};